import React, { useState, useEffect, useRef } from 'react';
import './TransformSlider.scss';

const SWIPE_THRESHOLD = 200; // Time in milliseconds

const TransformSlider = ({ optionsData }) => {
    const images = optionsData.map((option) => option.imageUrl);
    const sliderRef = useRef(null);

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [draggedDistance, setDraggedDistance] = useState(0);
    const [dragStartTime, setDragStartTime] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDragStartTime(Date.now());
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;

        const currentDraggedDistance = e.clientX - startX;
        setDraggedDistance(currentDraggedDistance);
    };

    const handleMouseUp = () => {
        if (!sliderRef.current) return;

        const isLeft = activeImageIndex === 0;
        const isRight = activeImageIndex === images.length - 1;

        const sliderWidth = sliderRef.current.offsetWidth;
        const elapsedTime = Date.now() - dragStartTime;

        let targetIndex = activeImageIndex;
        if (elapsedTime < SWIPE_THRESHOLD) {
            if (draggedDistance > 0.5) {
                if (!isLeft)
                    targetIndex =
                        (activeImageIndex - 1 + images.length) % images.length;
            } else if (draggedDistance < -0.5) {
                if (!isRight)
                    targetIndex = (activeImageIndex + 1) % images.length;
            }
        } else {
            if (draggedDistance > sliderWidth / 2) {
                if (!isLeft)
                    targetIndex =
                        (activeImageIndex - 1 + images.length) % images.length;
            } else if (draggedDistance < -sliderWidth / 2) {
                if (!isRight)
                    targetIndex = (activeImageIndex + 1) % images.length;
            }
        }

        setActiveImageIndex(targetIndex);
        setIsDragging(false);
        setDraggedDistance(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 120000);

        return () => clearInterval(interval);
    }, [images.length]);

    const transformValue = isDragging
        ? `translateX(calc(${-activeImageIndex * 100}% + ${draggedDistance}px))`
        : `translateX(${-activeImageIndex * 100}%)`;

    return (
        <div
            className="transform-slider"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className={`image-wrapper${isDragging ? ' dragging' : ''}`}
                style={{ transform: transformValue }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="image-wrapper__slide-image"
                        onDragStart={(e) => e.preventDefault()}
                    />
                ))}
            </div>
            <div className="slider-pagination">
                {optionsData.map((option, index) => (
                    <div
                        key={index}
                        className={`slider-pagination__item${
                            activeImageIndex === index ? ' active' : ''
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                    >
                        {option.optionLabel}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransformSlider;
