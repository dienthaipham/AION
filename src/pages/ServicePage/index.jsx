import React from 'react';
import { InfiniteDragSlider } from '../../components';
import { OPTION_DATA } from '../../constants/frame3';
import './ServicePage.scss';

function ServicePage(props) {
    return <InfiniteDragSlider images={OPTION_DATA} />;
}

export default ServicePage;
