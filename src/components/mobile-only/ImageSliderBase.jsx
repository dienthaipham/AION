import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import './ImageSliderBase.scss';

const ImageSliderBase = ({ optionsData, activeImageIndex }) => {
    const isMobile = useIsMobile();
    const images = optionsData.map((option) =>
        isMobile ? option.mobileImageUrl : option.imageUrl,
    );

    return (
        <div className='color-slider-base'>
            <img
                src={images[activeImageIndex]} // First image as placeholder
                alt='Placeholder'
                id='color-placeholder'
                loading='lazy'
            />
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${image}`}
                    className={activeImageIndex === index ? 'active' : ''}
                    style={{ zIndex: activeImageIndex === index ? 2 : 3 }}
                    loading='lazy'
                />
            ))}
        </div>
    );
};

export default ImageSliderBase;
