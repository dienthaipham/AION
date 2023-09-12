import React, { useState, useRef } from 'react';
import './Events.scss';

const SWIPE_THRESHOLD = 200; // Time in milliseconds

function Events(props) {
    const { events } = props;

    const [startX, setStartX] = useState(0);
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const [deltaX, setDeltaX] = useState(0);

    const sliderRef = useRef(null);
    const startCurrentTranslateX = useRef(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartTime, setDragStartTime] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
        setDragStartTime(Date.now());
    };

    const handleMouseMove = (event) => {
        if (!isDragging || !sliderRef.current) return;

        const newTranslateX = Math.round(event.clientX - startX) + startCurrentTranslateX.current;
        setCurrentTranslateX(newTranslateX);
        setDeltaX(event.clientX - startX);
    };

    const handleMouseUp = () => {
        let newTranslateX = currentTranslateX;
        const scaleTranslateX = Math.round(10 * deltaX);

        const elapsedTime = Date.now() - dragStartTime;

        if (elapsedTime < SWIPE_THRESHOLD) {
            if (deltaX > 0.5) {
                newTranslateX = Math.min(scaleTranslateX + startCurrentTranslateX.current, 0);
            } else if (deltaX < -0.5) {
                newTranslateX = Math.max(
                    scaleTranslateX + startCurrentTranslateX.current,
                    -250 * (9 - 1),
                );
            }
        } else {
            if (currentTranslateX > 0) {
                newTranslateX = 0;
            }
        }

        setCurrentTranslateX(newTranslateX);
        startCurrentTranslateX.current = newTranslateX;

        setIsDragging(false);
        setDeltaX(0);
    };

    const transformValue = `translateX(${currentTranslateX}px)`;

    return (
        <div className='t-ctn'>
            <div className='swiper-container swiper-container-horizontal swiper-container-free-mode'>
                <div
                    className='swiper-wrapper'
                    style={{
                        transform: transformValue,
                        transitionDuration: isDragging ? '0ms' : '300ms',
                    }}
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}>
                    {events.map((event) => (
                        <div className='swiper-slide' style={{ width: '266.667px' }}>
                            <div className='date-box'>
                                <p className='date'>{event.date}</p>
                                <p className='dot'></p>
                            </div>
                            <div className='cont'>
                                <div className='img-box'>
                                    <img src={event.image} alt='content-pic' />
                                </div>
                                <p className='txt'>{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <span
                    className='swiper-notification'
                    aria-live='assertive'
                    aria-atomic='true'></span>
            </div>
        </div>
    );
}

export default Events;
