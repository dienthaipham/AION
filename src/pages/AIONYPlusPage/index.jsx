import { ColorSlider, Modal, OpacitySlider, ScrollSpy, Section } from '../../components';
import {
    Y_YOUNGER_DATA,
    CAR_COLOR_DATA,
    INTERIOR_COLOR_DATA,
    RIM_DATA,
    TRENDY_LOOKS_DATA,
    CAMPING_CAR_DATA,
    SMART_COCKPIT_DATA,
    SMART_DRIVING_DATA,
    BATTERY_DATA,
    BUYBACK_DATA,
} from '../../constants/AIONYPlusPage';
import PowerSlide from './PowerSlide';

function AIONYPlusPage() {
    const sectionsData = [
        {
            id: 'Y Younger',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/03/67a1c3a8-b699-4d9d-b262-d27ad5fdee58.jpg'
                    mobileSrc='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/03/390bd34f-0dc6-419b-b6be-0af2edfa1a4d.jpg'
                    alt='Y Younger'
                />
            ),
        },
        {
            id: 'Y Younger (1)',
            Component: <OpacitySlider optionsData={Y_YOUNGER_DATA} />,
            merged: true,
        },

        {
            id: 'Y Plus',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/06/1e8cdc95-2088-43cb-af1e-05eb763532a1.jpeg'
                    alt='Y Plus'
                />
            ),
            pcOnly: true,
        },
        {
            id: '续航',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/07/06ca9125-aa43-40d7-aac2-1dff9f487c36.jpg'
                    alt='续航'
                />
            ),
            pcOnly: true,
        },
        {
            id: '空间',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/07d7a7d5-4813-4062-a4e5-04d856f536d2.jpg'
                    alt='空间'
                />
            ),
            pcOnly: true,
        },
        { id: '动力', Component: <PowerSlide />, pcOnly: true },

        {
            id: 'e9bcd02a',
            Component: (
                <Section mobileSrc='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/07/e9bcd02a-3e7b-4f65-858f-f6cbb4f99563.jpg' />
            ),
            mobileOnly: true,
        },
        {
            id: '2d015fb1',
            Component: (
                <Section mobileSrc='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/07/2d015fb1-a06b-45db-86e9-f200cdaa5fc2.png' />
            ),
            mobileOnly: true,
        },

        {
            id: '车型颜色',
            Component: <ColorSlider optionsData={CAR_COLOR_DATA} />,
            pcOnly: true,
        },
        {
            id: 'car-modal',
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
            id: '内饰颜色',
            Component: <OpacitySlider optionsData={INTERIOR_COLOR_DATA} />,
            pcOnly: true,
        },
        { id: '轮辋', Component: <OpacitySlider optionsData={RIM_DATA} />, pcOnly: true },

        {
            id: '百变潮颜',
            Component: <OpacitySlider optionsData={TRENDY_LOOKS_DATA} />,
        },
        {
            id: '露营神车',
            Component: <OpacitySlider optionsData={CAMPING_CAR_DATA} />,
        },
        {
            id: '智能座舱',
            Component: <OpacitySlider optionsData={SMART_COCKPIT_DATA} />,
        },
        {
            id: '指尖潮玩  智驾泊车',
            Component: <OpacitySlider optionsData={SMART_DRIVING_DATA} />,
        },
        {
            id: '弹匣电池',
            Component: <OpacitySlider optionsData={BATTERY_DATA} />,
        },
        {
            id: '1年9折回购',
            Component: <OpacitySlider optionsData={BUYBACK_DATA} />,
            pcOnly: true,
        },
        {
            id: '服务权益',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/c425c426-a700-4a4d-b005-47f8d85519b6.jpg'
                    mobileSrc='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/09/f9ff06e5-dff6-4c82-bd0e-fc8e1842aa81.jpg'
                    alt='服务权益'
                />
            ),
        },
        {
            id: '金融方案',
            Component: (
                <Section
                    src='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/08/8d95ad42-3800-47af-bdb6-49c8bbdb1bb9.jpg'
                    mobileSrc='https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/08/a0b3c386-d27f-4b56-8efa-df9408e0c951.jpg'
                    alt='金融方案'
                />
            ),
        },
    ];

    return <ScrollSpy sectionsData={sectionsData} />;
}

export default AIONYPlusPage;
