import React, { useState } from 'react';
import classNames from 'classnames';
import './About01Page.scss';

const sections = ['埃安', '智联产业园', '新能源工厂'];

function About01Page(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div className='group-sections'>
                <img
                    src='https://www.aion.com.cn/web/pc/images/us-banner.png?v=1667381819238'
                    className='b-pic'
                />

                <div className='list-box '>
                    <ul className='u-list clearfix'>
                        {sections.map((item, index) => (
                            <li
                                className={`${index === activeIndex ? 'on' : ''}`}
                                onClick={() => setActiveIndex(index)}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div
                        className={classNames('cont', 'clearfix', {
                            'week-on': activeIndex === 0,
                        })}>
                        <div className='left'>
                            <p className='txt'>广汽埃安新能源汽车股份有限公司</p>
                            <p className='dis'>
                                广汽埃安新能源汽车股份有限公司（简称“广汽埃安”）成立于2017年7月28日，是广汽集团发展智能网联新能源汽车的战略核心载体。广汽埃安成立以来，坚持“EV（纯电动）+ICV（智能网联）”，坚持创新引领，建成了国内首家新能源纯电专属工厂，塑造了国际领先的埃安品牌，推出了五款世界级产品。经过五年发展，广汽埃安已成为全球新能源汽车头部企业，拥有两个工厂、40万辆/年产能，年均复合增长率超120%，产销稳居行业前三。面向未来，广汽埃安将聚焦EV+ICV技术路线，围绕研发、产业链、智造与质量、营销服务与组织文化五大领域，全面提升品牌价值，致力于提供世界级的移动智能新能源产品和服务，成为世界领先和社会信赖的绿色智慧移动价值创造者。
                            </p>
                        </div>
                        <div className='right'>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/gxgs-pic.jpg'
                                className='u-logo'
                            />
                        </div>
                    </div>

                    <div
                        className={classNames('cont', 'clearfix', {
                            'week-on': activeIndex === 1,
                        })}>
                        <div className='left'>
                            <p className='txt'>广汽智联新能源产业园</p>
                            <p className='dis'>
                                为打造具有全球竞争力的自主品牌新能源汽车产业集群，广汽集团前瞻性、高起点战略布局，2017年4月开始建设广汽智联新能源汽车产业园，打造全球新能源汽车创新硅谷。产业园规划面积7500亩，总投资450亿元，总规划面积积5平方公里；产业园以广汽埃安为龙头，吸引芯片、操作系统、三电、智能驾驶等上下游优秀企业落户，构建融合智慧生活的全产业链开放创新生态系统，打造具有“智能、开放、创新、绿色、共享、生态”的价值园区。
                            </p>
                        </div>
                        <div className='right'>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/cyy-pic.jpg'
                                className='u-logo'
                            />
                        </div>
                    </div>

                    <div
                        className={classNames('cont', 'clearfix', {
                            'week-on': activeIndex === 2,
                        })}>
                        <div className='left'>
                            <p className='txt'>埃安工厂</p>
                            <p className='dis'>
                                埃安汽车工厂总规划产能40万辆/年，其中一期产能20万辆/年，占地703亩，总投资47亿元。工厂广泛应用物联网、大数据、智能机器人等技术，将智能制造与广汽生产方式深度融合，是可以让用户深度参与汽车定义、具备个性化定制生产能力的工厂，是集数字化、智能化和能源综合利用的生态工厂，让汽车制造与自然环境融为一体、和谐共处。
                            </p>
                        </div>
                        <div className='right'>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/qcgc.jpg'
                                className='u-logo'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='b-event clearfix'>
                <div className='event-pic'>
                    <img
                        src='https://www.aion.com.cn/web/pc/images/dsj-pic.png?v=1658217958651'
                        alt='event-pic'
                    />
                </div>

                <div className='t-ctn'>
                    <div className='swiper-container swiper-container-horizontal swiper-container-free-mode'>
                        <div
                            className='swiper-wrapper'
                            style={{
                                transform: 'translate3d(0px, 0px, 0px)',
                                transitionDuration: '0ms',
                            }}>
                            <div
                                className='swiper-slide swiper-slide-active'
                                style={{ width: '266.667px' }}>
                                <div className='date-box'>
                                    <p className='date'>2022.10.27</p>
                                    <p className='dot'></p>
                                </div>
                                <div className='cont'>
                                    <div className='img-box'>
                                        <img
                                            src='https://www.aion.com.cn/Public/Uploads/Picture/images/2022/10/243777281124557537242732953745.jpg'
                                            alt='content-pic'
                                        />
                                    </div>
                                    <p className='txt'>
                                        近日，由广汽埃安、广汽乘用车、广汽商贸联合投资，并由广汽埃安控股的因湃电池科技公司正式注册成立...
                                    </p>
                                </div>
                            </div>

                            <div className='swiper-slide' style={{ width: '266.667px' }}>
                                <div className='date-box'>
                                    <p className='date'>2018.08.27</p>
                                    <p className='dot'></p>
                                </div>
                                <div className='cont'>
                                    <div className='img-box'>
                                        <img
                                            src='https://www.aion.com.cn/Public/Uploads/Picture/images/2022/09/871443976371467818577424561548.png'
                                            alt='content-pic'
                                        />
                                    </div>
                                    <p className='txt'>广汽新能源GE3 530在奥林匹克塔正式上市。</p>
                                </div>
                            </div>

                            <div className='swiper-slide' style={{ width: '266.667px' }}>
                                <div className='date-box'>
                                    <p className='date'>2018.07.28</p>
                                    <p className='dot'></p>
                                </div>
                                <div className='cont'>
                                    <div className='img-box'>
                                        <img
                                            src='https://www.aion.com.cn/Public/Uploads/Picture/images/2022/09/248846354124396315899455645668.png'
                                            alt='content-pic'
                                        />
                                    </div>
                                    <p className='txt'>
                                        广汽新能源“因AI而来”AI系统发布会于广州琶醍隆重举行。
                                    </p>
                                </div>
                            </div>

                            <div className='swiper-slide' style={{ width: '266.667px' }}>
                                <div className='date-box'>
                                    <p className='date'>2018.06.11</p>
                                    <p className='dot'></p>
                                </div>
                                <div className='cont'>
                                    <div className='img-box'>
                                        <img
                                            src='https://www.aion.com.cn/Public/Uploads/Picture/images/2022/08/915686988558292714565822263618.png'
                                            alt='content-pic'
                                        />
                                    </div>
                                    <p className='txt'>
                                        广汽新能源GE3 530智能、续航双升级，正式开启火爆预售。
                                    </p>
                                </div>
                            </div>

                            <div className='swiper-slide' style={{ width: '266.667px' }}>
                                <div className='date-box'>
                                    <p className='date'>2018.04.26</p>
                                    <p className='dot'></p>
                                </div>
                                <div className='cont'>
                                    <div className='img-box'>
                                        <img
                                            src='https://www.aion.com.cn/Public/Uploads/Picture/images/2022/08/895269434344443482164316947115.png'
                                            alt='content-pic'
                                        />
                                    </div>
                                    <p className='txt'>
                                        广汽新能源在北京车展正式发布全新品牌口号、品牌IP及用户专属APP。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <span
                            className='swiper-notification'
                            aria-live='assertive'
                            aria-atomic='true'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About01Page;
