import AIONYPlusPage from '../pages/AIONYPlusPage';
import HyperLabPage from '../pages/HyperLabPage';
import ServicePage from '../pages/ServicePage';
import AIONSPage from '../pages/AIONSPage';
import About06Page from '../pages/AnnouncementPage';
import About05Page from '../pages/CooperationPage';
import About04Page from '../pages/RecruitmentPage';
import CompanyInformationPage from '../pages/CompanyInformationPage';
import UnicornPage from '../pages/UnicornPage';
import NewsPage from '../pages/NewsPage';
import RecruitmentPage from '../pages/RecruitmentPage';
import CooperationPage from '../pages/CooperationPage';
import AnnouncementPage from '../pages/AnnouncementPage';

export const MAIN_ROUTES = [
    // {
    //     name: 'AION Y Plus',
    //     path: '/vehicles/aion_y_plus',
    //     element: <AIONYPlusPage />,
    // },
    {
        name: 'AION Y Plus',
        path: '/',
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
        element: <CompanyInformationPage />,
    },
    {
        name: '北鼻一家',
        path: '/show/unicorn',
        element: <UnicornPage />,
    },
    {
        name: '新闻资讯',
        path: '/show/news',
        element: <NewsPage />,
    },
    {
        name: '人才招聘',
        path: '/show/join',
        element: <RecruitmentPage />,
    },
    {
        name: '合作加盟',
        path: '/show/cooperation',
        element: <CooperationPage />,
    },
    {
        name: '信息公示',
        path: '/information/announcement',
        element: <AnnouncementPage />,
    },
];
