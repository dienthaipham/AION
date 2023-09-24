import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './OpacitySlider.scss';
import useIsMobile from '../hooks/useIsMobile';

const OpacitySlider = ({ optionsData }) => {
    const isMobile = useIsMobile();
    const images = optionsData.map((option) =>
        isMobile ? option.mobileImageUrl : option.imageUrl,
    );

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    // const handleMouseDown = (e) => {
    //     setIsDragging(true);
    //     setStartX(e.clientX);
    // };

    // const handleMouseMove = (e) => {
    //     if (!isDragging) return;
    //     if (e.clientX - startX > 50) {
    //         setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    //         setIsDragging(false);
    //     } else if (startX - e.clientX > 50) {
    //         setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //         setIsDragging(false);
    //     }
    // };

    // const handleMouseUp = () => {
    //     setIsDragging(false);
    // };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
        setStartX(x);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX);
        if (x - startX > 50) {
            setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsDragging(false);
        } else if (startX - x > 50) {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 120000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className='opacity-slider'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}>
            <img
                src={images[activeImageIndex]} // First image as placeholder
                alt='Placeholder'
                id='placeholder'
            />
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${image}`}
                    className={activeImageIndex === index ? 'active' : ''}
                    style={{ zIndex: activeImageIndex === index ? 2 : 3 }}
                    onDragStart={(e) => e.preventDefault()}
                />
            ))}

            <div className='slider-pagination'>
                {optionsData.map((option, index) => (
                    <div
                        key={index}
                        className={classNames('slider-pagination__item', {
                            'slider-pagination__item--active': activeImageIndex === index,
                        })}
                        onClick={() => setActiveImageIndex(index)}>
                        {option.optionLabel}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpacitySlider;
