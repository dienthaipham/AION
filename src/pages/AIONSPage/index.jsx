import { ColorSlider, OpacitySlider, ScrollSpy } from '../../components';
import Section from '../../components/Section';
import {
    OPTION1_DATA,
    OPTION2_DATA,
    OPTION3_DATA,
    OPTION4_DATA,
    OPTION5_DATA,
} from '../../constants/frame2';
import './AIONSPage.scss';

const Section1 = () => {
    return (
        <div className="aions-section-slide">
            <div className="any-main-hd">
                <div className="any-hd-text">-2023款-</div>
                <div className="any-hd-icon">
                    <img
                        src="https://www.aion.com.cn/web/pc/images/aion-s-new/sKv-logo.png"
                        alt=""
                    />
                </div>
                <div className="any-hd-des">中高级智能轿车引领者</div>
                <div className="any-btn">
                    <span onclick="toConfig()">查看配置表</span>
                    <span onclick="toBook()">预约试驾</span>
                </div>
            </div>

            <div className="swiper-container" id="info-swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src="https://www.aion.com.cn/web/pc/images/aion-s-new/aions-kv.jpg?v=167540895950020230330"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Section2 = () => {
    return (
        <div className="swiper-wrapper" id="pageSwiper0">
            <div className="any-btn" style={{ top: '35%' }}>
                <span
                    onclick="toPlusMore()"
                    style={{
                        width: 'auto',
                        marginRight: '0',
                        padding: '10px 30px',
                    }}
                >
                    前往了解AION S Plus
                </span>
            </div>
            <div
                className="swiper-slide swiper-slide-active"
                // style="width: 1127px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                style={{
                    width: '1127px',
                    opacity: 1,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}
            >
                <img
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/8-1.jpeg?v=1691548923807"
                    alt="广汽埃安Y"
                />
            </div>
        </div>
    );
};

function AIONSPage() {
    const sectionsData = [
        {
            id: '',
            Component: <Section1 />,
            hidden: true,
        },
        {
            id: '续航',
            Component: <Section2 />,
        },
        {
            id: '空间',
            Component: (
                <Section
                    alt="03"
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/9-1.jpeg?v=1691548923807"
                />
            ),
        },
        {
            id: '动力',
            Component: (
                <Section
                    alt="04"
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/10-1.jpeg?v=1691548923807"
                />
            ),
        },

        {
            id: '车身颜色',
            Component: <ColorSlider optionsData={OPTION1_DATA} />,
        },
        {
            id: '内饰颜色',
            Component: <OpacitySlider optionsData={OPTION2_DATA} />,
        },
        {
            id: '车型颜色',
            Component: <OpacitySlider optionsData={OPTION3_DATA} />,
        },
        {
            id: '大空间',
            Component: <OpacitySlider optionsData={OPTION4_DATA} />,
        },
        {
            id: '高颜值',
            Component: <OpacitySlider optionsData={OPTION5_DATA} />,
        },

        {
            id: '个性定制',
            Component: (
                <Section
                    alt="10"
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/5-2.png"
                />
            ),
        },
        {
            id: '服务权益',
            Component: (
                <Section
                    alt="11"
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/serverImg.png"
                />
            ),
        },
        {
            id: '金融方案',
            Component: (
                <Section
                    alt="12"
                    src="https://www.aion.com.cn/web/pc/images/aion-s-new/financeImg.png?v=1650244776666"
                />
            ),
        },
    ];

    return <ScrollSpy sectionsData={sectionsData} />;
}

export default AIONSPage;
