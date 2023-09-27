import React from 'react';
import { Section } from '../../components';
import { SECTION_IMAGES } from '../../constants/CooperationPage';
import './CooperationPage.scss';

function CooperationPage(props) {
    return (
        <React.Fragment>
            {SECTION_IMAGES.map(({ imageUrl, mobileImageUrl }) => (
                <Section src={imageUrl} mobileSrc={mobileImageUrl} alt='' />
            ))}
        </React.Fragment>
    );
}

export default CooperationPage;
