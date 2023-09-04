import React from 'react';
import './Section.scss';

function Section({ src, alt }) {
    return (
        <div className="section-slide">
            <img src={src} alt={alt} />
        </div>
    );
}

export default Section;
