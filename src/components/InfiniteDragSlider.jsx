import React, { useState, useEffect, useRef } from 'react';
import './InfiniteDragSlider.scss';

const SWIPE_THRESHOLD = 200; // Time in milliseconds

const InfiniteDragSlider = ({ images }) => {
    const sliderRef = useRef(null);

    const [activeImageIndex, setActiveImageIndex] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [draggedDistance, setDraggedDistance] = useState(0);
    const [dragStartTime, setDragStartTime] = useState(0);

    const [hovering, setHovering] = useState(false);
    const [autoSlideFlag, setAutoSlideFlag] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setDragStartTime(Date.now());

        setAutoSlideFlag(false);

        if (activeImageIndex === 0) {
            setActiveImageIndex(images.length);
        }
        if (activeImageIndex === images.length + 1) {
            setActiveImageIndex(1);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !sliderRef.current) return;

        const currentDraggedDistance = e.clientX - startX;
        setDraggedDistance(currentDraggedDistance);
    };

    const handleMouseUp = () => {
        if (!sliderRef.current) return;

        const sliderWidth = sliderRef.current.offsetWidth;
        const elapsedTime = Date.now() - dragStartTime;

        let targetIndex = activeImageIndex;
        const len = images.length + 2;

        if (elapsedTime < SWIPE_THRESHOLD) {
            if (draggedDistance > 0.5) {
                targetIndex = (activeImageIndex - 1 + len) % len;
            } else if (draggedDistance < -0.5) {
                targetIndex = (activeImageIndex + 1) % len;
            }
        } else {
            if (draggedDistance > sliderWidth / 2) {
                targetIndex = (activeImageIndex - 1 + len) % len;
            } else if (draggedDistance < -sliderWidth / 2) {
                targetIndex = (activeImageIndex + 1) % len;
            }
        }

        setActiveImageIndex(targetIndex);
        setIsDragging(false);
        setDraggedDistance(0);
    };

    const handleEnterSlideButton = () => {
        if (activeImageIndex === 0 || activeImageIndex === images.length + 1) {
            const newIndex = activeImageIndex === 0 ? images.length : 1;
            setActiveImageIndex(newIndex);
            setHovering(true);
        }
    };

    const handleClickSlideButton = (direction) => {
        setHovering(false);
        if (direction === 'prev')
            setActiveImageIndex(
                (prev) => (prev - 1 + images.length + 2) % (images.length + 2)
            );
        else if (direction === 'next')
            setActiveImageIndex((prev) => (prev + 1) % (images.length + 2));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeImageIndex === images.length + 1) {
                setAutoSlideFlag(true);
            } else {
                setAutoSlideFlag(false);
            }

            setActiveImageIndex((prevIndex) => {
                if (prevIndex === images.length + 1) return 1;
                return (prevIndex + 1) % (images.length + 2);
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, activeImageIndex]);

    const transformValue = isDragging
        ? `translateX(calc(${-activeImageIndex * 100}% + ${draggedDistance}px))`
        : `translateX(${-activeImageIndex * 100}%)`;

    return (
        <div
            className="infinite-slider"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className={`image-wrapper${
                    isDragging || hovering || autoSlideFlag
                        ? ' quick-switch'
                        : ''
                }`}
                style={{ transform: transformValue }}
            >
                <img
                    key={0}
                    src={images[images.length - 1]}
                    alt={`Slide ${0}`}
                    className="slider-image"
                    onDragStart={(e) => e.preventDefault()}
                />
                {images.map((image, index) => (
                    <img
                        key={index + 1}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="slider-image"
                        onDragStart={(e) => e.preventDefault()}
                    />
                ))}
                <img
                    key={images.length + 1}
                    src={images[0]}
                    alt={`Slide ${images.length + 1}`}
                    className="slider-image"
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>
            <div className="slider-pagination">
                {images.map((_, index) => {
                    const newActiveImageIndex =
                        (activeImageIndex - 1 + images.length) % images.length;

                    return (
                        <span
                            key={index}
                            className={`slider-pagination-option${
                                newActiveImageIndex === index ? ' active' : ''
                            }`}
                            onClick={() => setActiveImageIndex(index + 1)}
                        ></span>
                    );
                })}
            </div>
            <div
                className="slider-button prev"
                onMouseEnter={handleEnterSlideButton}
                onMouseLeave={() => setHovering(false)}
                onClick={() => handleClickSlideButton('prev')}
            ></div>
            <div
                className="slider-button next"
                onMouseEnter={handleEnterSlideButton}
                onMouseLeave={() => setHovering(false)}
                onClick={() => handleClickSlideButton('next')}
            ></div>
        </div>
    );
};

export default InfiniteDragSlider;
