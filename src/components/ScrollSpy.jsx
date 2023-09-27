import React, { useRef, useState, useEffect } from 'react';
import { smoothScrollTo } from '../functions/smoothScrollTo';
import classNames from 'classnames';
import useIsMobile from '../hooks/useIsMobile';
import './ScrollSpy.scss';

const ScrollSpy = (props) => {
    const { sectionsData } = props;

    const isMobile = useIsMobile();
    const displaySections = isMobile
        ? sectionsData.filter((data) => !data.pcOnly)
        : sectionsData.filter((data) => !data.mobileOnly);
    const pcSections = sectionsData.filter((data) => !data.mobileOnly);

    const [activeSection, setActiveSection] = useState(displaySections[0].id);
    const sectionRefs = pcSections.map(() => useRef(null));
    const targetSelectedRef = useRef(null);

    const handleScroll = () => {
        const isWithinTarget = (id) =>
            !targetSelectedRef.current || targetSelectedRef.current === id;

        const setAndResetActive = (id) => {
            setActiveSection(id);
            targetSelectedRef.current = null;
            return;
        };

        for (let i = 0; i < pcSections.length - 1; i++) {
            const halfwayOfNextSection =
                sectionRefs[i + 1].current.offsetTop - sectionRefs[i + 1].current.offsetHeight / 2;

            if (window.scrollY < halfwayOfNextSection) {
                if (isWithinTarget(pcSections[i].id)) {
                    setAndResetActive(pcSections[i].id);
                    return;
                }
            }
        }

        const lastSectionId = pcSections[pcSections.length - 1].id;
        if (isWithinTarget(lastSectionId)) {
            setAndResetActive(lastSectionId);
            return;
        }
    };

    useEffect(() => {
        if (isMobile) return;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    return (
        <>
            {(activeSection !== pcSections[0].id || !pcSections[0].hidden) && (
                <div className='scroll-menu'>
                    {pcSections.map((section, index) => {
                        if (section.hidden) return;
                        return (
                            <div
                                key={section.id}
                                className={classNames('scroll-menu__item', {
                                    'scroll-menu__item--active':
                                        activeSection === section.id ||
                                        (activeSection === pcSections[index + 1]?.id &&
                                            pcSections[index + 1].merged),
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

            {displaySections.map((section, index) => {
                return (
                    <div key={section.id} ref={!isMobile ? sectionRefs[index] : null}>
                        {section.Component}
                    </div>
                );
            })}
        </>
    );
};

export default ScrollSpy;
