import React, { useState, useEffect } from 'react';
import './ColorSlider.scss';

const ColorSlider = ({ optionsData }) => {
    const images = optionsData.map((option) => option.imageUrl);

    const [activeImageIndex, setActiveImageIndex] = useState(3);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        if (e.clientX - startX > 50) {
            setActiveImageIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
            setIsDragging(false);
        } else if (startX - e.clientX > 50) {
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
        }, 50000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="color-slider"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <img
                src={images[activeImageIndex]} // First image as placeholder
                alt="Placeholder"
                id="color-placeholder"
            />
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${image}`}
                    className={activeImageIndex === index ? 'active' : ''}
                    style={{ zIndex: activeImageIndex === index ? 2 : 3 }}
                />
            ))}

            <div className="slider-pagination">
                {optionsData.map((option, index) => (
                    <span
                        key={index}
                        className="color-wrapper"
                        tabIndex="0"
                        role="button"
                        aria-label="Go to slide 1"
                        onClick={() => setActiveImageIndex(index)}
                    >
                        <div
                            className={`color-img-wrapper${
                                activeImageIndex === index ? ' active' : ''
                            }`}
                        >
                            <img
                                src={option.colorImageUrl}
                                className="an-icon-item"
                                alt=""
                            />
                        </div>
                        <span className="color-label">{option.colorLabel}</span>
                    </span>
                ))}

                <div className="color-slider-tips">
                    *颜色仅供参考，具体以实车为准
                </div>
            </div>
        </div>
    );
};

export default ColorSlider;
