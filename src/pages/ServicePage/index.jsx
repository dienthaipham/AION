import React from 'react';
import { InfiniteDragSlider } from '../../components';
import { OPTION_DATA } from '../../constants/frame3';
import './ServicePage.scss';

function ServicePage(props) {
    return <InfiniteDragSlider optionsData={OPTION_DATA} />;
}

export default ServicePage;
