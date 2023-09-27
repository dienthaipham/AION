import React, { useState } from 'react';
import { Section } from '../../components';
import useIsMobile from '../../hooks/useIsMobile';
import './RecruitmentPage.scss';

function RecruitmentPage(props) {
    const steps = ['企业文化', '招聘策略', '薪酬福利', '人才培训', '职业发展'];
    const isMobile = useIsMobile();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Section
                src='https://www.aion.com.cn/web/pc/images/zp-banner.png?v=1658219070649'
                mobileSrc='https://www.aion.com.cn/web/m/images/aion-more/recruit-banner.png'
                alt=''
            />

            <div className='rlzy-box'>
                {isMobile ? (
                    <div class='join-title'>人力资源管理</div>
                ) : (
                    <div className='rlzy-box__tit-img'>
                        <img src='https://www.aion.com.cn/web/pc/images/rlzy-tit.png?v=1658219070649' />
                    </div>
                )}

                <p className='rlzy-box__dis'>
                    人才是第一资源，创新是第一动力。公司坚持“创新驱动，人才先行”，着力打造助推埃安事业快速发展的强劲“人才驱动力”，打造一支在行业内领先的创新型人才队伍。
                </p>

                <div className='rlzy-box__zplc-box'>
                    <ul className='list clearfix'>
                        {steps.map((item, index) => (
                            <li
                                onClick={() => setActiveIndex(index)}
                                className={`${index === activeIndex ? 'on' : ''}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className='line'></p>
                </div>

                {activeIndex === 0 && (
                    <div className='rlzy-box__content'>
                        <p className='dis'>
                            公司愿景：成为世界领先和社会信赖的绿色智慧移动价值创造者。
                        </p>
                        <p className='dis'>企业理念：人为本、信为道、创为先。</p>
                        <p className='dis'>人才理念：造车育人，共创共享。</p>
                    </div>
                )}

                {activeIndex === 1 && (
                    <div className='rlzy-box__content week-on'>
                        <p className='dis'>
                            公司坚持“五湖四海、广纳贤才”的人才招聘战略，以广汽系统内企业高素质业务骨干组成的核心团队为基础，广泛吸纳各界优秀人才，建立高效的埃安人才梯队。
                        </p>
                    </div>
                )}

                {activeIndex === 2 && (
                    <div className='rlzy-box__content'>
                        <p className='dis'>
                            公司创新设计了“全面薪酬体系”，将提供在行业内富有竞争力的薪酬待遇。创新人才激励体系，构建科学、先进的全面薪酬激励体系，激发人才的创业激情！
                        </p>
                        <p className='dis'>
                            1、
                            具有竞争力的薪酬水平：提供在行业内具有竞争力，内部具有相对公平性，成长性的薪酬待遇，使员工共享公司发展成果；
                        </p>
                        <p className='dis'>
                            2、
                            弹性兼具成长性的绩效奖励：业绩工资与个人业绩挂钩，根据公司经营效益，每年发放丰厚的年度奖金；
                        </p>
                        <p className='dis'>
                            3、
                            丰富多彩的员工福利体系：六险一金（增加商业医疗保险）、员工优惠购车、人才公寓、交通车、安家费、住宿综合补贴等；
                        </p>
                        <p className='dis'>
                            4、
                            中长期激励计划：公司将有计划地建立中长期激励计划，并根据实际情况实施，如股票期权计划，企业年金计划等。
                        </p>
                    </div>
                )}

                {activeIndex === 3 && (
                    <div className='rlzy-box__content'>
                        <p className='dis'>
                            公司以构建学习型组织为导向，依托广汽大学、埃安人才培训中心的平台，针对新大学生，专门设立“埃安菁英成长训练营”（2018年荣获广汽集团优秀培训项目“金奖”）。“埃安菁英成长训练营”采取理论培训、工厂见习、25hours体验店见习、户外拓展、“导师制”等创新的多元化培养方式，帮助每一位新大学生融入团队、提升能力、快速成长。
                        </p>
                        <p className='dis'>
                            公司每年开展“创无止境，心有未来”为主题创新广汽IGA活动（QC、提案改善）等活动，进行评比、奖励，为员工提供展示自我的舞台，2019年公司荣获集团创新广汽（IGA）成果发表会“双金奖”。
                        </p>
                    </div>
                )}

                {activeIndex === 4 && (
                    <div className='rlzy-box__content'>
                        <p className='dis'>
                            公司创新建立了“三条跑道”（管理、专业、操作类），大大拓展了员工的职业发展通道。建立公正、公平、公开的体制。公司大力推进干部年轻化，大胆选拨、任用年轻干部，使优秀员工及时得到肯定、成长及激励。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RecruitmentPage;
