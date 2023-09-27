import React, { useState } from 'react';
import ImageSliderBase from './ImageSliderBase';
import ImageSliderPageItemBase from './ImageSliderPageItemBase';
import './Modal.scss';

const Modal = (props) => {
    const { carColorData, interiorColorData, rimData } = props;

    const [activeCarColorIndex, setActiveCarColorIndex] = useState(0);
    const [activeInteriorColorIndex, setActiveInteriorColorIndex] = useState(0);
    const [activeRimIndex, setActiveRimIndex] = useState(0);

    return (
        <div className='modal-wrapper'>
            <div style={{ position: 'relative' }}>
                <ImageSliderBase
                    optionsData={carColorData}
                    activeImageIndex={activeCarColorIndex}
                />

                <div className={`slider-pagination${carColorData.length < 5 ? ' small' : ''}`}>
                    <div className='title'>
                        <span>内饰主题</span>
                    </div>
                    <div className='colors'>
                        {carColorData.map((option, index) => (
                            <div key={index} style={{ width: '20%' }}>
                                <ImageSliderPageItemBase
                                    option={option}
                                    index={index}
                                    activeImageIndex={activeCarColorIndex}
                                    onChangeActiveImageIndex={(v) => setActiveCarColorIndex(v)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* <div className='color-slider-tips'>*颜色仅供参考，具体以实车为准</div> */}
                </div>
            </div>

            <div className={`wrapper-2-boxes${carColorData.length < 5 ? ' small' : ''}`}>
                <div className='wrapper-01'>
                    <div className='box'>
                        <div className='box__title'>
                            <span>内饰主题</span>
                        </div>
                        <ImageSliderBase
                            optionsData={interiorColorData}
                            activeImageIndex={activeInteriorColorIndex}
                        />
                        <div className='box__pagination'>
                            {interiorColorData.map((option, index) => (
                                <div key={index} style={{ width: '20%' }}>
                                    <ImageSliderPageItemBase
                                        option={option}
                                        index={index}
                                        activeImageIndex={activeInteriorColorIndex}
                                        onChangeActiveImageIndex={(v) =>
                                            setActiveInteriorColorIndex(v)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='wrapper-02'>
                    <div className='box'>
                        <div className='box__title'>
                            <span>轮辋</span>
                        </div>
                        <ImageSliderBase optionsData={rimData} activeImageIndex={activeRimIndex} />
                        <div className='box__pagination'>
                            {rimData.map((option, index) => (
                                <div key={index} style={{ width: '33%' }}>
                                    <ImageSliderPageItemBase
                                        option={option}
                                        index={index}
                                        activeImageIndex={activeRimIndex}
                                        onChangeActiveImageIndex={(v) => setActiveRimIndex(v)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
