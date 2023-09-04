import { ColorSlider, OpacitySlider, ScrollSpy } from '../../components';
import Section from '../../components/Section';
import {
    OPTION10_DATA,
    OPTION1_DATA,
    OPTION2_DATA,
    OPTION3_DATA,
    OPTION4_DATA,
    OPTION5_DATA,
    OPTION6_DATA,
    OPTION7_DATA,
    OPTION8_DATA,
    OPTION9_DATA,
} from '../../constants/frame1';
import './AIONYPlusPage.scss';

const Section6 = () => (
    <div className="aionyplus-section-slide">
        <div className="swiper-slide-6-btn">
            <span
                className="code-btn"
                style={{
                    fontSize: '15px',
                    color: 'rgb(255, 255, 255)',
                    border: '2px solid rgb(255, 255, 255)',
                }}
                data-btn-url=""
                data-btn-type="CONFIG_TABLE"
                data-color="#FFFFFF"
            >
                查看详细参数
            </span>
        </div>
        <img
            src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/96bd1c81-d032-4cf9-9c3f-320d67967fe4.jpg"
            alt="广汽埃安Y"
        />
    </div>
);

function AIONYPlusPage() {
    const sectionsData = [
        {
            id: 'Y Younger',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/03/67a1c3a8-b699-4d9d-b262-d27ad5fdee58.jpg"
                    alt="01"
                />
            ),
        },
        {
            id: 'Y Younger',
            Component: <OpacitySlider optionsData={OPTION1_DATA} />,
            merged: true,
        },
        {
            id: 'Y Plus',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/06/1e8cdc95-2088-43cb-af1e-05eb763532a1.jpeg"
                    alt="03"
                />
            ),
        },
        {
            id: '续航',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/07/06ca9125-aa43-40d7-aac2-1dff9f487c36.jpg"
                    alt="04"
                />
            ),
        },
        {
            id: '空间',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/07d7a7d5-4813-4062-a4e5-04d856f536d2.jpg"
                    alt="05"
                />
            ),
        },
        { id: '动力', Component: <Section6 /> },
        {
            id: '车型颜色',
            Component: <ColorSlider optionsData={OPTION2_DATA} />,
        },
        {
            id: '内饰颜色',
            Component: <OpacitySlider optionsData={OPTION3_DATA} />,
        },
        { id: '轮辋', Component: <OpacitySlider optionsData={OPTION4_DATA} /> },
        {
            id: '百变潮颜',
            Component: <OpacitySlider optionsData={OPTION5_DATA} />,
        },
        {
            id: '露营神车',
            Component: <OpacitySlider optionsData={OPTION6_DATA} />,
        },
        {
            id: '智能座舱',
            Component: <OpacitySlider optionsData={OPTION7_DATA} />,
        },
        {
            id: '指尖潮玩  智驾泊车',
            Component: <OpacitySlider optionsData={OPTION8_DATA} />,
        },
        {
            id: '弹匣电池',
            Component: <OpacitySlider optionsData={OPTION9_DATA} />,
        },
        {
            id: '1年9折回购',
            Component: <OpacitySlider optionsData={OPTION10_DATA} />,
        },
        {
            id: '服务权益',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/c425c426-a700-4a4d-b005-47f8d85519b6.jpg"
                    alt="16"
                />
            ),
        },
        {
            id: '金融方案',
            Component: (
                <Section
                    src="https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/08/8d95ad42-3800-47af-bdb6-49c8bbdb1bb9.jpg"
                    alt="17"
                />
            ),
        },
    ];

    return <ScrollSpy sectionsData={sectionsData} />;
}

export default AIONYPlusPage;
