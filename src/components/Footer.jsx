import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <React.Fragment>
            <div className='aion-common-footer'>
                <div className='footer-left'>
                    <div className='service-left-phone'>
                        <span>埃安客服电话：400-188-3333</span>
                        <i>|</i>
                        <a href='http://www.gac.com.cn/'>广汽集团</a>
                        <i>|</i>
                        <a href='https://www.hyper.com.cn'>昊铂官网</a>
                    </div>

                    <div className='aion-common-copyright'>
                        © 2022 广汽埃安新能源汽车股份有限公司
                        <a href='https://beian.miit.gov.cn' target='_blank'>
                            <span>粤ICP备17161275号</span>
                        </a>
                        <a
                            target='_blank'
                            href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003399'>
                            <img
                                src='https://www.aion.com.cn/Public/Static/image/record_icon.png'
                                alt='Record'
                            />
                            粤公网安备 44011302003399号
                        </a>
                    </div>
                </div>

                <div className='footer-right'>
                    <div className='flex-box-column'>
                        <a>
                            <img
                                className='wechat'
                                src='https://www.aion.com.cn/web/pc/images/information-announcement/wx-icon.png'
                                alt='WeChat'
                            />
                        </a>
                        <span>官方公众号</span>
                    </div>

                    <div className='flex-box-column'>
                        <a href='https://weibo.com/gacne' target='_blank'>
                            <img
                                src='https://www.aion.com.cn/web/pc/images/information-announcement/wb-icon.png'
                                alt='Weibo'
                            />
                        </a>
                        <span>官方微博</span>
                    </div>

                    <div className='flex-box-column'>
                        <a>
                            <img
                                className='foot-download-app'
                                src='https://www.aion.com.cn/web/pc/images/information-announcement/download-icon.png'
                                alt='Download App'
                            />
                        </a>
                        <span>下载官方APP</span>
                    </div>
                </div>
            </div>

            <div className='aion-common-footer-mobile'>
                <div className='service-phone'>
                    <span>
                        埃安客服电话：
                        <a href='tel:400-188-3333' className='text tel'>
                            400-188-3333
                        </a>
                    </span>
                    <div>
                        <a href='http://www.gac.com.cn/'>广汽集团</a>
                        <i>|</i>
                        <a href='https://www.hyper.com.cn'>昊铂官网</a>
                    </div>
                </div>

                <div className='service-icon'>
                    <div className='flex-box-column'>
                        <a>
                            <img
                                className='wechat'
                                src='https://www.aion.com.cn/web/m/images/information-announcement/wx-icon.png'
                                alt=''
                            />
                        </a>
                        <span>官方公众号</span>
                    </div>

                    <div className='flex-box-column'>
                        <a href='https://weibo.com/gacne'>
                            <img
                                src='https://www.aion.com.cn/web/m/images/information-announcement/wb-icon.png'
                                alt=''
                            />
                        </a>
                        <span>官方微博</span>
                    </div>

                    <div className='flex-box-column flex-box-column-download-app'>
                        <a>
                            <img
                                className='download-qrcode-new-m'
                                src='https://www.aion.com.cn/web/m/images/information-announcement/download-icon.png'
                                alt=''
                            />
                        </a>
                        <span>下载官方APP</span>
                    </div>
                </div>

                <div className='aion-common-copyright'>
                    © 2022 广汽埃安新能源汽车股份有限公司{' '}
                    <a href='https://beian.miit.gov.cn' target='_blank'>
                        粤ICP备17161275号
                    </a>
                </div>
                <div className='aion-common-copyright'>
                    <a
                        target='_blank'
                        href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003399'
                        style={{ display: 'inline-block' }}>
                        <img
                            src='https://www.aion.com.cn/Public/Static/image/record_icon.png'
                            style={{ width: '11px', height: '11px', marginRight: '6px' }}
                        />
                        粤公网安备 44011302003399号
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
