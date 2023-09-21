import React, { useState } from 'react';
import './Profiles.scss';
import useIsMobile from '../../hooks/useIsMobile';

function Profiles(props) {
    const isMobile = useIsMobile();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='dis'>
            <div className='pic-tit'>
                <img
                    src={
                        isMobile
                            ? 'https://www.aion.com.cn/web/m/images/djyj-tit.png'
                            : 'https://www.aion.com.cn/web/pc/images/djyi-pic1.png?v=1658218806283'
                    }
                    alt='Profile'
                />
            </div>

            <div className='family-js'>
                <img
                    src={
                        isMobile
                            ? 'https://www.aion.com.cn/web/m/images/babyyj-bg.png'
                            : 'https://www.aion.com.cn/web/pc/images/by-bg.png'
                    }
                    className='f-bg'
                    alt='Background'
                />
                <div className='details'>
                    <div className='lf-cont clearfix'>
                        <div className={`left index-${activeIndex}`}>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/djbb-pic.png?version=v1693474710'
                                className='dj-img0'
                                alt='Image 0'
                            />
                            <img
                                src='https://www.aion.com.cn/web/pc/images/djmm-pic.png'
                                className='dj-img1'
                                alt='Image 1'
                            />
                            <img
                                src='https://www.aion.com.cn/web/pc/images/djbaby-pic.png'
                                className='dj-img2'
                                alt='Image 2'
                            />
                        </div>

                        <div className='right'>
                            <div className={`r-box${activeIndex === 0 ? ' active' : ''}`}>
                                <div className='tit'>
                                    独角爸爸
                                    <span>（科技潮男）</span>
                                </div>
                                <p className='ts'>车技爆表、懂很多的“老司机”、科技极客、超级奶爸</p>
                                <p className='tst'>
                                    性别：<i>男</i>
                                </p>
                                <p className='tst'>
                                    性格：<i>积极进取 | 喜欢尝试 | 理性严谨</i>
                                </p>
                                <p className='tst'>
                                    兴趣：
                                    <i>
                                        喜欢打游戏；
                                        <br />
                                        体验黑科技
                                        <br />
                                        遛娃、宠老婆
                                    </i>
                                </p>
                            </div>

                            <div className={`r-box${activeIndex === 1 ? ' active' : ''}`}>
                                <div className='tit'>
                                    独角妈妈
                                    <span>（精致女孩）</span>
                                </div>
                                <p className='ts'>
                                    爱打扮，化妆品随身带，爱自拍，精通各类修图APP。
                                </p>
                                <p className='tst'>
                                    性别：<i>女</i>
                                </p>
                                <p className='tst'>
                                    性格：<i>理想主义 | 天生浪漫 | 追求美好</i>
                                </p>
                                <p className='tst'>
                                    兴趣：
                                    <i>
                                        爱化妆打扮、爱自拍；爱逛街网购；
                                        <br />
                                        到网红店打卡，爱晒娃晒车晒美食。
                                    </i>
                                </p>
                            </div>

                            <div className={`r-box${activeIndex === 2 ? ' active' : ''}`}>
                                <div className='tit'>
                                    独角北鼻
                                    <span>（机智Boy）</span>
                                </div>
                                <p className='ts'>
                                    智商130+的好奇宝宝，移动的“十万个为什么”，脑洞大过天，神逻辑，机智有趣的大活宝，爱玩爱闹戏很多。
                                </p>
                                <p className='tst'>
                                    性别：<i>男</i>
                                </p>
                                <p className='tst'>
                                    性格：<i>机智灵敏 | 活泼好动 | 搞怪伶俐</i>
                                </p>
                                <p className='tst'>
                                    兴趣：
                                    <i>
                                        喜欢玩乐、搞怪、耍宝、逗趣
                                        <br />
                                        好动，喜欢到处蹦跶热衷于破解智力游戏
                                        <br />
                                        喜欢神回复
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='n-ps'>
                        <span
                            className='previous'
                            onClick={() => setActiveIndex((prev) => (prev - 1 + 3) % 3)}></span>
                        <span
                            className='next'
                            onClick={() => setActiveIndex((prev) => (prev + 1) % 3)}></span>
                    </div>
                    <div className='code-box'></div>
                </div>
            </div>

            <div className='emoticon clearfix'>
                <div className='left-pic'>
                    <img
                        src='https://www.aion.com.cn/web/pc/images/bqb-djbb-pic.png?version=v1693474710'
                        className={`bqb-pic${activeIndex === 0 ? ' active' : ''}`}
                        alt='Emoticon Image 1'
                    />
                    <img
                        src='https://www.aion.com.cn/web/pc/images/bqb-djmm-pic.png'
                        className={`bqb-pic${activeIndex === 1 ? ' active' : ''}`}
                        alt='Emoticon Image 2'
                    />
                    <img
                        src='https://www.aion.com.cn/web/pc/images/bqb-djbaby-pic.png'
                        className={`bqb-pic${activeIndex === 2 ? ' active' : ''}`}
                        alt='Emoticon Image 3'
                    />
                </div>

                <div className='right-pic'>
                    <img
                        src='https://www.aion.com.cn/web/pc/images/bqb-code.jpg'
                        alt='Emoticon Code'
                    />
                    <p>下载表情包</p>
                </div>
            </div>
        </div>
    );
}

export default Profiles;
