import React, { useState } from 'react';
import { Section } from '../../components';
import './About03Page.scss';

function About03Page(props) {
    return (
        <div>
            <Section
                src='https://www.aion.com.cn/web/pc/images/new-banner.png?v=1658219070649'
                alt=''
            />
            <ul class='new-list' id='news-list'>
                <li>
                    <a href='newdetail/49312.html' target='_Blank'>
                        <div class='left'>
                            <span>
                                <img src='https://static.gacne.com.cn/Public/Uploads/article/pic/file/2023/05/ea516854-bf23-49bf-9551-e30fc67d1c32.png?imageMogr2/format/jpg/quality/60/thumbnail/750x' />
                            </span>
                        </div>
                        <div class='right'>
                            <h5>
                                广汽埃安与滴滴自动驾驶战略合作再升级，2025年推出首款量产L4无人驾驶新能源车
                            </h5>
                            <p> </p>
                            <div class='num-box'>
                                <p class='see-box'>6074</p>
                                <p class='time'>5-10 16:42</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='newdetail/47910.html' target='_Blank'>
                        <div class='left'>
                            <span>
                                <img src='https://static.gacne.com.cn/Public/Uploads/article/pic/file/2023/04/728eb957-694c-41e2-8b00-6d1e83a0267b.png?imageMogr2/format/jpg/quality/60/thumbnail/750x' />
                            </span>
                        </div>
                        <div class='right'>
                            <h5>《广汽自主电池建设项目环境影响报告表》全文公开公告</h5>
                            <p> </p>
                            <div class='num-box'>
                                <p class='see-box'>7279</p>
                                <p class='time'>4-5 13:53</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default About03Page;
