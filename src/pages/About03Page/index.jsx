import React, { useState } from 'react';
import { Section } from '../../components';
import NewItem from './NewItem';
import Pagination from './Pagination';
import useIsMobile from '../../hooks/useIsMobile';
import './About03Page.scss';

const DATA = [
    {
        href: 'newdetail/49312.html',
        src: 'https://static.gacne.com.cn/Public/Uploads/article/pic/file/2023/05/ea516854-bf23-49bf-9551-e30fc67d1c32.png?imageMogr2/format/jpg/quality/60/thumbnail/750x',
        title: '广汽埃安与滴滴自动驾驶战略合作再升级，2025年推出首款量产L4无人驾驶新能源车',
        seenNum: '6074',
        time: '5-10 16:42',
    },
    {
        href: 'newdetail/47910.html',
        src: 'https://static.gacne.com.cn/Public/Uploads/article/pic/file/2023/04/728eb957-694c-41e2-8b00-6d1e83a0267b.png?imageMogr2/format/jpg/quality/60/thumbnail/750x',
        title: '《广汽自主电池建设项目环境影响报告表》全文公开公告',
        seenNum: '7279',
        time: '4-5 13:53',
    },
];

function About03Page(props) {
    const isMobile = useIsMobile();

    return (
        <div className='about-03'>
            <Section
                src={
                    isMobile
                        ? 'https://www.aion.com.cn/web/m/images/aion-more/news-banner.png'
                        : 'https://www.aion.com.cn/web/pc/images/new-banner.png?v=1658219070649'
                }
                alt=''
            />
            <ul class='new-list'>
                {DATA.map((item) => (
                    <NewItem {...item} />
                ))}
            </ul>

            {isMobile ? <p class='more-btn'>更多新闻</p> : <Pagination />}
        </div>
    );
}

export default About03Page;
