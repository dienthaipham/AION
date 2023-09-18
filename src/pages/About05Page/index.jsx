import React from 'react';
import { Section } from '../../components';
import { SECTION_IMAGES } from '../../constants/about5';
import useIsMobile from '../../hooks/useIsMobile';
import './About05Page.scss';

function About05Page(props) {
    const isMobile = useIsMobile();

    return (
        <React.Fragment>
            {SECTION_IMAGES.map(({ image, mobileImage }) => (
                <Section src={isMobile ? mobileImage : image} alt='' />
            ))}
        </React.Fragment>
    );
}

export default About05Page;
