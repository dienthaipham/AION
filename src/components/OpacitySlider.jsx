import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './OpacitySlider.scss';

const OpacitySlider = ({ optionsData }) => {
    const images = optionsData.map((option) => option.imageUrl);

    const [activeImageIndex, setActiveImageIndex] = useState(0);

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
        }, 120000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="opacity-slider"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <img
                src={images[activeImageIndex]} // First image as placeholder
                alt="Placeholder"
                id="placeholder"
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

            <div className="slider-pagination">
                {optionsData.map((option, index) => (
                    <div
                        key={index}
                        className={classNames('slider-pagination__item', {
                            'slider-pagination__item--active':
                                activeImageIndex === index,
                        })}
                        onClick={() => setActiveImageIndex(index)}
                    >
                        {option.optionLabel}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OpacitySlider;
