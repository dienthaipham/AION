import React from 'react';
import { TransformSlider, Section, InfiniteDragSlider } from '../../components';
import { BRANCH_DATA, SMART_COCKPIT_DATA } from '../../constants/HyperLabPage';
import useIsMobile from '../../hooks/useIsMobile';
import './HyperLabPage.scss';

function HyperLabPage(props) {
    const isMobile = useIsMobile();

    return (
        <>
            <Section
                alt='01'
                src='https://www.aion.com.cn/web/pc/images/website-science/1-1.jpg?v=1671678241964'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/1-1.jpg?v=1671678241964'
            />
            <Section
                alt='02'
                src='https://www.aion.com.cn/web/pc/images/website-science/2-1.jpg?v=1671678241964'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/2-1.jpg?v=1671678241964'
            />
            <Section
                alt='03'
                src='https://www.aion.com.cn/web/pc/images/website-science/3-1.jpg?v=1671678241964'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/3-1.jpg?v=1671678241964'
            />
            <Section
                alt='04'
                src='https://www.aion.com.cn/web/pc/images/website-science/4-1.jpg?v=1678697126261'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/4-1.jpg?v=1678697126261'
            />
            <Section
                alt='05'
                src='https://www.aion.com.cn/web/pc/images/website-science/5-1.jpg?v=1671678241964'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/5-1.jpg?v=1671678241964'
            />
            <Section
                alt='06'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s1-bg-new.jpg'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/tech-s1-bg-new.png'
            />

            {!isMobile ? (
                <>
                    <TransformSlider optionsData={BRANCH_DATA} />
                    <div className='s3'>
                        <div className='s3-container'>
                            <div className='s3-image-item'></div>
                            <div className='s3-image-item'></div>
                            <div className='s3-image-item'></div>
                        </div>
                    </div>
                    <TransformSlider optionsData={SMART_COCKPIT_DATA} />
                </>
            ) : (
                <>
                    <InfiniteDragSlider optionsData={BRANCH_DATA} />
                    <Section mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-1.jpg' />
                    <Section mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-2.jpg' />
                    <Section mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-3.jpg' />
                    <InfiniteDragSlider optionsData={SMART_COCKPIT_DATA} />
                </>
            )}

            <Section
                alt='07'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-1.jpg'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-7.jpg'
            />
            <Section
                alt='08'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-2.jpg?v=1677657332157'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-8.jpg?v=1677657332157'
            />
            <Section
                alt='09'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-3.jpg'
                mobileSrc='https://www.aion.com.cn/web/m/images/website-science/s3-9.jpg'
            />
        </>
    );
}

export default HyperLabPage;
