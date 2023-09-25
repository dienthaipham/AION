import React from 'react';
import './ImageSliderPageItemBase.scss';

function ImageSliderPageItemBase(props) {
    const { option, index, activeImageIndex, onChangeActiveImageIndex } = props;

    return (
        <span key={index} className='color-wrapper' onClick={() => onChangeActiveImageIndex(index)}>
            <div className={`color-img-wrapper${activeImageIndex === index ? ' active' : ''}`}>
                <img src={option.colorImageUrl} className='an-icon-item' alt='' loading='lazy' />
            </div>
            <span className='color-label'>{option.colorLabel || option.optionLabel}</span>
        </span>
    );
}

export default ImageSliderPageItemBase;
