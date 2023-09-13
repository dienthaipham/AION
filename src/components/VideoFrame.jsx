import React, { useState, useRef } from 'react';
import './VideoFrame.scss';

function VideoFrame(props) {
    const { coverImage, video } = props;

    const [played, setPlayed] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlayed(true);
        }
    };

    return (
        <div className='video'>
            <img src={coverImage} className='cover-img' alt='Cover' />
            <video
                ref={videoRef}
                width='100%'
                height='100%'
                src={video}
                id='video-box'
                controls
                style={{ zIndex: played ? 20 : 9 }}></video>
            <p className='pop' onClick={handlePlayVideo}>
                <img
                    src='https://www.aion.com.cn/web/pc/images/icon/play-btn.png'
                    className='play-btn'
                    alt='Play button'
                />
            </p>
        </div>
    );
}

export default VideoFrame;
