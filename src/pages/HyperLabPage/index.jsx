import React from 'react';
import { TransformSlider, Section } from '../../components';
// import MovingSlider from '../../components/MovingSlider';
import { OPTION1_DATA, OPTION2_DATA } from '../../constants/frame4';
import './HyperLabPage.scss';

function HyperLabPage(props) {
    return (
        <>
            <Section
                alt='01'
                src='https://www.aion.com.cn/web/pc/images/website-science/1-1.jpg?v=1671678241964'
            />
            <Section
                alt='02'
                src='https://www.aion.com.cn/web/pc/images/website-science/2-1.jpg?v=1671678241964'
            />
            <Section
                alt='03'
                src='https://www.aion.com.cn/web/pc/images/website-science/3-1.jpg?v=1671678241964'
            />
            <Section
                alt='04'
                src='https://www.aion.com.cn/web/pc/images/website-science/4-1.jpg?v=1678697126261'
            />
            <Section
                alt='05'
                src='https://www.aion.com.cn/web/pc/images/website-science/5-1.jpg?v=1671678241964'
            />
            <Section
                alt='06'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s1-bg-new.jpg'
            />
            <TransformSlider optionsData={OPTION1_DATA} />
            <div className='s3'>
                <div className='s3-container'>
                    <div className='s3-image-item'></div>
                    <div className='s3-image-item'></div>
                    <div className='s3-image-item'></div>
                </div>
            </div>
            <TransformSlider optionsData={OPTION2_DATA} />
            <Section
                alt='07'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-1.jpg'
            />
            <Section
                alt='08'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-2.jpg?v=1677657332157'
            />
            <Section
                alt='09'
                src='https://www.aion.com.cn/web/pc/images/website-science/tech-s5-3.jpg'
            />
        </>
    );
}

export default HyperLabPage;
