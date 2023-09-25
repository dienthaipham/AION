import React, { useState } from 'react';
import { OPTION2_DATA, OPTION3_DATA, OPTION4_DATA } from '../constants/frame1';
import ImageSliderBase from './ImageSliderBase';
import ImageSliderPageItemBase from './ImageSliderPageItemBase';
import './Modal.scss';

const optionsData01 = OPTION2_DATA;
const optionsData02 = OPTION3_DATA;
const optionsData03 = OPTION4_DATA;

const Modal = () => {
    const [activeImageIndex01, setActiveImageIndex01] = useState(0);
    const [activeImageIndex02, setActiveImageIndex02] = useState(0);
    const [activeImageIndex03, setActiveImageIndex03] = useState(0);

    return (
        <div className='modal-wrapper'>
            <div style={{ position: 'relative' }}>
                <ImageSliderBase optionsData={OPTION2_DATA} activeImageIndex={activeImageIndex01} />

                <div className='slider-pagination'>
                    {optionsData01.map((option, index) => (
                        <div style={{ width: '20%' }}>
                            <ImageSliderPageItemBase
                                option={option}
                                index={index}
                                activeImageIndex={activeImageIndex01}
                                onChangeActiveImageIndex={(v) => setActiveImageIndex01(v)}
                            />
                        </div>
                    ))}

                    {/* <div className='color-slider-tips'>*颜色仅供参考，具体以实车为准</div> */}
                </div>
            </div>

            <div className='wrapper-2-boxes'>
                <div className='wrapper-01'>
                    <div className='box'>
                        <div className='box__title'>
                            <span>内饰主题</span>
                        </div>
                        <ImageSliderBase
                            optionsData={OPTION3_DATA}
                            activeImageIndex={activeImageIndex02}
                        />
                        <div className='box__pagination'>
                            {optionsData02.map((option, index) => (
                                <div style={{ width: '20%' }}>
                                    <ImageSliderPageItemBase
                                        option={option}
                                        index={index}
                                        activeImageIndex={activeImageIndex02}
                                        onChangeActiveImageIndex={(v) => setActiveImageIndex02(v)}
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
                        <ImageSliderBase
                            optionsData={OPTION4_DATA}
                            activeImageIndex={activeImageIndex03}
                        />
                        <div className='box__pagination'>
                            {optionsData03.map((option, index) => (
                                <div style={{ width: '33%' }}>
                                    <ImageSliderPageItemBase
                                        option={option}
                                        index={index}
                                        activeImageIndex={activeImageIndex03}
                                        onChangeActiveImageIndex={(v) => setActiveImageIndex03(v)}
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
