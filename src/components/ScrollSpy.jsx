import React, { useRef, useState, useEffect } from 'react';
import { smoothScrollTo } from '../functions/smoothScrollTo';
import classNames from 'classnames';
import './ScrollSpy.scss';
import useIsMobile from '../hooks/useIsMobile';

const ScrollSpy = ({ sectionsData }) => {
    // Filter section data
    const isMobile = useIsMobile();
    sectionsData = isMobile
        ? sectionsData.filter((data) => !data.pcOnly)
        : sectionsData.filter((data) => !data.mobileOnly);

    const [activeSection, setActiveSection] = useState(sectionsData[0].id);

    const sectionRefs = sectionsData.map(() => useRef(null));
    const targetSelectedRef = useRef(null);

    const handleScroll = () => {
        const isWithinTarget = (id) =>
            !targetSelectedRef.current || targetSelectedRef.current === id;

        const setAndResetActive = (id) => {
            setActiveSection(id);
            targetSelectedRef.current = null;
            return;
        };

        for (let i = 0; i < sectionsData.length - 1; i++) {
            const halfwayOfNextSection =
                sectionRefs[i + 1].current.offsetTop - sectionRefs[i + 1].current.offsetHeight / 2;

            if (window.scrollY < halfwayOfNextSection) {
                if (isWithinTarget(sectionsData[i].id)) {
                    setAndResetActive(sectionsData[i].id);
                    return;
                }
            }
        }

        const lastSectionId = sectionsData[sectionsData.length - 1].id;
        if (isWithinTarget(lastSectionId)) {
            setAndResetActive(lastSectionId);
            return;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {(activeSection !== sectionsData[0].id || !sectionsData[0].hidden) && (
                <div className='scroll-menu'>
                    {sectionsData.map((section, index) => {
                        if (section.hidden) return;
                        return (
                            <div
                                key={section.id}
                                className={classNames('scroll-menu__item', {
                                    'scroll-menu__item--active':
                                        activeSection === section.id ||
                                        (activeSection === sectionsData[index + 1]?.id &&
                                            sectionsData[index + 1].merged),
                                })}
                                style={{
                                    display: section.merged ? 'none' : 'block',
                                }}
                                onClick={() => {
                                    targetSelectedRef.current = section.id;
                                    smoothScrollTo(sectionRefs[index].current.offsetTop, 300);
                                }}>
                                {section.id}
                            </div>
                        );
                    })}
                </div>
            )}

            {sectionsData.map((section, index) => {
                return (
                    <div key={section.id} ref={sectionRefs[index]}>
                        {section.Component}
                    </div>
                );

                const both = !section.pcOnly && !section.mobileOnly;

                if (isMobile) {
                    return (
                        (both || section.mobileOnly) && (
                            <div key={section.id} ref={sectionRefs[index]}>
                                {section.Component}
                            </div>
                        )
                    );
                } else {
                    return (
                        (both || section.pcOnly) && (
                            <div key={section.id} ref={sectionRefs[index]}>
                                {section.Component}
                            </div>
                        )
                    );
                }
            })}
        </>
    );
};

export default ScrollSpy;
