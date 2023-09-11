import React, { useState } from 'react';
import './About01Page.scss';

function About01Page(props) {
    return (
        <div>
            <div class='top'>
                <img
                    src='https://www.aion.com.cn/web/pc/images/us-banner.png?v=1667381819238'
                    class='b-pic'
                />

                <div class='list-box '>
                    <ul class='u-list clearfix'>
                        <li class='on'>埃安</li>
                        <li class=''>智联产业园</li>
                        <li class=''>新能源工厂</li>
                    </ul>

                    <div class='cont clearfix week-on'>
                        <div class='left'>
                            <p class='txt'>广汽埃安新能源汽车股份有限公司</p>
                            <p class='dis'>
                                广汽埃安新能源汽车股份有限公司（简称“广汽埃安”）成立于2017年7月28日，是广汽集团发展智能网联新能源汽车的战略核心载体。广汽埃安成立以来，坚持“EV（纯电动）+ICV（智能网联）”，坚持创新引领，建成了国内首家新能源纯电专属工厂，塑造了国际领先的埃安品牌，推出了五款世界级产品。经过五年发展，广汽埃安已成为全球新能源汽车头部企业，拥有两个工厂、40万辆/年产能，年均复合增长率超120%，产销稳居行业前三。面向未来，广汽埃安将聚焦EV+ICV技术路线，围绕研发、产业链、智造与质量、营销服务与组织文化五大领域，全面提升品牌价值，致力于提供世界级的移动智能新能源产品和服务，成为世界领先和社会信赖的绿色智慧移动价值创造者。
                            </p>
                        </div>
                        <div class='right'>
                            <img src='/web/pc/images/gxgs-pic.jpg' class='u-logo' />
                        </div>
                    </div>

                    {/* <div class='cont clearfix'>
                        <div class='left'>
                            <p class='txt'>广汽智联新能源产业园</p>
                            <p class='dis'>
                                为打造具有全球竞争力的自主品牌新能源汽车产业集群，广汽集团前瞻性、高起点战略布局，2017年4月开始建设广汽智联新能源汽车产业园，打造全球新能源汽车创新硅谷。产业园规划面积7500亩，总投资450亿元，总规划面积积5平方公里；产业园以广汽埃安为龙头，吸引芯片、操作系统、三电、智能驾驶等上下游优秀企业落户，构建融合智慧生活的全产业链开放创新生态系统，打造具有“智能、开放、创新、绿色、共享、生态”的价值园区。
                            </p>
                        </div>
                        <div class='right'>
                            <img src='/web/pc/images/cyy-pic.jpg' class='u-logo' />
                        </div>
                    </div>

                    <div class='cont clearfix'>
                        <div class='left'>
                            <p class='txt'>埃安工厂</p>
                            <p class='dis'>
                                埃安汽车工厂总规划产能40万辆/年，其中一期产能20万辆/年，占地703亩，总投资47亿元。工厂广泛应用物联网、大数据、智能机器人等技术，将智能制造与广汽生产方式深度融合，是可以让用户深度参与汽车定义、具备个性化定制生产能力的工厂，是集数字化、智能化和能源综合利用的生态工厂，让汽车制造与自然环境融为一体、和谐共处。
                            </p>
                        </div>
                        <div class='right'>
                            <img src='/web/pc/images/qcgc.jpg' class='u-logo' />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default About01Page;
