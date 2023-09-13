import React from 'react';
import './About02Page.scss';
import VideoFrame from '../../components/VideoFrame';
import Profiles from './Profiles';

function About02Page(props) {
    return (
        <div>
            <VideoFrame
                coverImage='https://static.gacne.com.cn/Public/Uploads/Picture/images/2022/09/723963692457158927361195817867.png'
                video='https://www.aion.com.cn/Public/Video/62ba1b5da9573.mp4'
            />
            <Profiles />

            <div class='by-jc'>
                <img src='https://www.aion.com.cn/web/pc/images/by-bg3.png' class='by-bg' />
                <div class='pic-tit pos'>
                    <img
                        src='https://www.aion.com.cn/web/pc/images/by-jc.png?v=1658218806283'
                        class=''
                    />
                </div>
                <div class='jc-box'>
                    <div class='p-size'>
                        <img src='https://www.aion.com.cn/web/pc/images/jc-pic.jpeg' />
                    </div>
                    <ul class='btn-list'>
                        <li class='check-li'>
                            <a
                                href='https://s.weibo.com/weibo/%23%E7%8B%AC%E8%A7%92%E5%8C%97%E9%BC%BB%23'
                                target='_Blank'>
                                立即前往
                            </a>
                        </li>
                        <li>每周四更新</li>
                    </ul>
                    <p class='hit'>更多内容关注埃安官方微博</p>
                </div>

                {/* <div class='long-box' id='bottom-table' data-ol-has-click-handler=''>
                    <img
                        src='https://static.gacne.com.cn/Public/Uploads/Picture/images/2022/09/765265418388392512977912669178.jpeg'
                        class='pics'
                    />
                    <p class='pop pop-long'>
                        <img
                            src='https://www.aion.com.cn/web/pc/images/icon/hand-icon.png'
                            class='hand-icon'
                        />
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default About02Page;
