import React from 'react';
import { InfiniteDragSlider } from '../../components';
import { SERVICE_DATA } from '../../constants/ServicePage';
import './ServicePage.scss';

function ServicePage(props) {
    return <InfiniteDragSlider optionsData={SERVICE_DATA} />;
}

export default ServicePage;
