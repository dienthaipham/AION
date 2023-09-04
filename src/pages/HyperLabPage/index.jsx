import React from 'react';
import { TransformSlider } from '../../components';
// import MovingSlider from '../../components/MovingSlider';

export const OPTION4_DATA = [
    {
        imageUrl:
            'https://static.gacne.com.cn/Public/Uploads/home/pic/file/2022/09/cebee12f-73dc-4406-bc49-6727d7b13663.jpg',
        optionLabel: '17英寸钢轮辋(带饰盖)',
    },
    {
        imageUrl:
            'https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/03/6d1c09fa-8889-4688-973f-43e8183cf101.jpg',
        optionLabel: '17英寸铝合金轮辋',
    },
    {
        imageUrl:
            'https://static.gacne.com.cn/Public/Uploads/home/pic/file/2023/03/65c8da42-59f0-480c-bf4e-d15d1dc1b0b4.jpg',
        optionLabel: '18英寸铝合金轮辋',
    },
];

function HyperLabPage(props) {
    return <TransformSlider optionsData={OPTION4_DATA} />;
}

export default HyperLabPage;
