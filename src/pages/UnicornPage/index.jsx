import React, { useState } from 'react';
import Profiles from './Profiles';
import WaseBox from './WaseBox';
import GuideModal from './GuideModal';
import { InfiniteDragSlider, VideoFrame } from '../../components';
import { OPTION_DATA, BOXES } from '../../constants/UnicornPage';
import useIsMobile from '../../hooks/useIsMobile';
import './UnicornPage.scss';

function UnicornPage(props) {
    const isMobile = useIsMobile();
    const [clicked, setClicked] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <VideoFrame
                coverImage='https://static.gacne.com.cn/Public/Uploads/Picture/images/2022/09/723963692457158927361195817867.png'
                video='https://www.aion.com.cn/Public/Video/62ba1b5da9573.mp4'
            />
            <Profiles />

            <div className='by-jc'>
                <img src='https://www.aion.com.cn/web/pc/images/by-bg3.png' className='by-bg' />
                <div className='pic-tit pos'>
                    <img src='https://www.aion.com.cn/web/pc/images/by-jc.png?v=1658218806283' />
                </div>

                <div className='jc-box'>
                    <div className='p-size'>
                        <img src='https://www.aion.com.cn/web/pc/images/jc-pic.jpeg' />
                    </div>
                    <ul className='btn-list'>
                        <li className='check-li'>
                            <a
                                href='https://s.weibo.com/weibo/%23%E7%8B%AC%E8%A7%92%E5%8C%97%E9%BC%BB%23'
                                target='_blank'
                                rel='noopener noreferrer'>
                                立即前往
                            </a>
                        </li>
                        <li>每周四更新</li>
                    </ul>
                    <p className='hit'>更多内容关注埃安官方微博</p>
                </div>

                <div
                    className={`long-box${!clicked ? ' locked' : ''}`}
                    onClick={() => setClicked(true)}>
                    <img
                        src='https://static.gacne.com.cn/Public/Uploads/Picture/images/2022/09/765265418388392512977912669178.jpeg'
                        className='pics'
                    />
                    {!clicked && (
                        <p className='pop pop-long'>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/icon/hand-icon.png'
                                className='hand-icon'
                            />
                        </p>
                    )}
                </div>

                <div className='long-box-mobile' onClick={() => setClicked(true)}>
                    <div class='long-pic'>
                        <div className={`img-box${!clicked ? ' locked' : ''}`}>
                            <img
                                src='https://static.gacne.com.cn/Public/Uploads/Picture/images/2022/09/765265418388392512977912669178.jpeg'
                                class='pic'
                            />
                        </div>
                        {!clicked && (
                            <div class='pop'>
                                <img
                                    src='https://www.aion.com.cn/web/m/images/icon/hand-icon.png'
                                    class='hand-icon'
                                />
                            </div>
                        )}
                    </div>
                    {/* <div class='gt-img'>
                        <img src='https://www.aion.com.cn/web/m/images/icon/hand-icon.png' />
                    </div> */}
                </div>

                <p class='ttil'>点击浏览</p>
            </div>

            <div class='sh-box'>
                <div class='pic-tit pos'>
                    <img
                        src={
                            isMobile
                                ? 'https://www.aion.com.cn/web/m/images/shzb-tit.png'
                                : 'https://www.aion.com.cn/web/pc/images/shzb-titpic.png?v=1658218806283'
                        }
                    />
                </div>

                <div class='cont-box clearfix'>
                    <div class='left-pb'>
                        <div class='pb-box'>
                            <img src='https://www.aion.com.cn/web/pc/images/pb-pic.png' />
                        </div>
                        <div class='tba-box'>
                            <InfiniteDragSlider optionsData={OPTION_DATA} switchOutside={true} />
                        </div>
                        <a
                            href='/download.php?files=/Public/file/2018/0929/70142365.rar'
                            class='dload-btn'>
                            下载屏保
                        </a>
                    </div>

                    <div class='right-zb'>
                        <div class='zb-tit'>
                            <img src='https://www.aion.com.cn/web/pc/images/zb-tit.png' />
                        </div>

                        <ul class='wase-list clearfix'>
                            {BOXES.map((item) => (
                                <li>
                                    <WaseBox
                                        image={item.image}
                                        title={item.title}
                                        handleClick={() => setOpenModal(true)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <GuideModal open={openModal} onChangeOpen={(v) => setOpenModal(v)} />
            </div>
        </div>
    );
}

export default UnicornPage;
