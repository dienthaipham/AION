import React from 'react';
import './Section.scss';
import useIsMobile from '../hooks/useIsMobile';

function Section(props) {
    const { src, mobileSrc, alt } = props;
    const isMobile = useIsMobile();

    return (
        <div className='section-slide'>
            <img src={isMobile ? mobileSrc : src} alt={alt} loading='lazy' />
        </div>
    );
}

export default Section;
