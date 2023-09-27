import { ColorSlider, OpacitySlider, ScrollSpy, Modal, Section } from '../../components';
import {
    CAR_COLOR_DATA,
    INTERIOR_COLOR_DATA,
    BATTERY_DATA,
    SPACE_DATA,
    LOOKS_DATA,
    RIM_DATA,
} from '../../constants/AIONSPage';
import useIsMobile from '../../hooks/useIsMobile';
import './AIONSPage.scss';

const Section1 = () => {
    const isMobile = useIsMobile();

    return (
        <div className='aions-section-slide'>
            {!isMobile && (
                <div className='any-main-hd'>
                    <div className='any-hd-text'>-2023款-</div>
                    <div className='any-hd-icon'>
                        <img
                            src='https://www.aion.com.cn/web/pc/images/aion-s-new/sKv-logo.png'
                            alt=''
                        />
                    </div>
                    <div className='any-hd-des'>中高级智能轿车引领者</div>
                    <div className='any-btn'>
                        <span onclick='toConfig()'>查看配置表</span>
                        <span onclick='toBook()'>预约试驾</span>
                    </div>
                </div>
            )}

            <div className='swiper-container' id='info-swiper'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <img
                            src={
                                isMobile
                                    ? 'https://www.aion.com.cn/web/m/images/aion-s/screen-new.jpg?v=167540895950020230331'
                                    : 'https://www.aion.com.cn/web/pc/images/aion-s-new/aions-kv.jpg?v=167540895950020230330'
                            }
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section2 = () => {
    return (
        <div className='swiper-wrapper'>
            <div className='any-btn' style={{ top: '35%' }}>
                <span>前往了解AION S Plus</span>
            </div>
            <div
                className='swiper-slide swiper-slide-active'
                style={{
                    opacity: 1,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}>
                <img
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/8-1.jpeg?v=1691548923807'
                    alt='广汽埃安Y'
                />
            </div>
        </div>
    );
};

const Section4 = () => {
    return (
        <div className='swiper-wrapper'>
            <div className='any-btn' style={{ top: '28%' }}>
                <span>查看详细参数</span>
            </div>
            <div
                className='swiper-slide swiper-slide-active'
                style={{
                    opacity: 1,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}>
                <img
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/10-1.jpeg?v=1691548923807'
                    alt='广汽埃安Y'
                />
            </div>
        </div>
    );
};

function AIONSPage() {
    const sectionsData = [
        {
            id: '001',
            Component: <Section1 />,
            hidden: true,
        },
        {
            id: '002',
            Component: (
                <Section mobileSrc='https://www.aion.com.cn/web/m/images/aion-s/params.jpg?v=1691555961031' />
            ),
            mobileOnly: true,
        },
        {
            id: '续航',
            Component: <Section2 />,
            pcOnly: true,
        },
        {
            id: '空间',
            Component: (
                <Section
                    alt='空间'
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/9-1.jpeg?v=1691548923807'
                />
            ),
            pcOnly: true,
        },
        {
            id: '动力',
            Component: <Section4 />,
            pcOnly: true,
        },

        {
            id: '动力',
            Component: (
                <Modal
                    carColorData={CAR_COLOR_DATA}
                    interiorColorData={INTERIOR_COLOR_DATA}
                    rimData={RIM_DATA}
                />
            ),
            mobileOnly: true,
        },

        {
            id: '车身颜色',
            Component: <ColorSlider optionsData={CAR_COLOR_DATA} />,
            pcOnly: true,
        },
        {
            id: '内饰颜色',
            Component: <OpacitySlider optionsData={INTERIOR_COLOR_DATA} />,
            pcOnly: true,
        },

        {
            id: '车型颜色',
            Component: <OpacitySlider optionsData={BATTERY_DATA} />,
        },
        {
            id: '大空间',
            Component: <OpacitySlider optionsData={SPACE_DATA} />,
        },
        {
            id: '高颜值',
            Component: <OpacitySlider optionsData={LOOKS_DATA} />,
        },

        {
            id: '个性定制',
            Component: (
                <Section
                    alt='个性定制'
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/5-2.png'
                    mobileSrc='https://www.aion.com.cn/web/m/images/aion-s/5-1.png'
                />
            ),
        },
        {
            id: '服务权益',
            Component: (
                <Section
                    alt='服务权益'
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/serverImg.png'
                    mobileSrc='https://www.aion.com.cn/web/m/images/aion-s/serverImg.jpg?v=1666949385018'
                />
            ),
        },
        {
            id: '金融方案',
            Component: (
                <Section
                    alt='金融方案'
                    src='https://www.aion.com.cn/web/pc/images/aion-s-new/financeImg.png?v=1650244776666'
                    mobileSrc='https://www.aion.com.cn/web/m/images/aion-s/financial-new.png?v=1650244856216'
                />
            ),
        },
    ];

    return <ScrollSpy sectionsData={sectionsData} />;
}

export default AIONSPage;
