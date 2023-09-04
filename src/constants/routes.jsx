import AIONYPlusPage from '../pages/AIONYPlusPage';
import HyperLabPage from '../pages/HyperLabPage';
import ServicePage from '../pages/ServicePage';
import AIONSPage from '../pages/AIONSPage';

export const MAIN_ROUTES = [
    {
        name: 'AION Y Plus',
        path: '/vehicles/aion_y_plus',
        element: <AIONYPlusPage />,
    },
    {
        name: 'AION S',
        path: '/vehicles/aion_s',
        element: <AIONSPage />,
    },
    {
        name: '服务',
        path: '/show/25hours',
        element: <ServicePage />,
    },
    {
        name: '昊铂科研实验室',
        path: '/show/science',
        element: <HyperLabPage />,
    },
];

export const ABOUT_ROUTES = [
    {
        name: '关于埃安',
        path: '/show/about_us',
        element: <>About 1</>,
    },
    {
        name: '北鼻一家',
        path: '/show/unicorn',
        element: <>About 2</>,
    },
    {
        name: '新闻资讯',
        path: '/show/news',
        element: <>About 3</>,
    },
    {
        name: '人才招聘',
        path: '/show/join',
        element: <>About 4</>,
    },
    {
        name: '合作加盟',
        path: '/show/cooperation',
        element: <>About 5</>,
    },
    {
        name: '信息公示',
        path: '/information/announcement',
        element: <>About 6</>,
    },
];
