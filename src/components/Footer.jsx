import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
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
                    <a href='https://beian.miit.gov.cn' target='_blank' rel='noopener noreferrer'>
                        <span>粤ICP备17161275号</span>
                    </a>
                    <a
                        target='_blank'
                        href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003399'
                        style={{
                            display: 'inline-block',
                            textDecoration: 'none',
                            height: '16px',
                            lineHeight: '16px',
                            marginLeft: '20px',
                        }}
                        rel='noopener noreferrer'>
                        <img
                            src='https://www.aion.com.cn/Public/Static/image/record_icon.png'
                            alt='Record'
                            style={{
                                marginTop: '-2px',
                                width: '16px',
                                height: '16px',
                                marginRight: '5px',
                            }}
                        />
                        粤公网安备 44011302003399号
                    </a>
                </div>
            </div>

            <div className='footer-right'>
                <div className='flex-box-column'>
                    <a href='javascript:void(0)'>
                        <img
                            className='wechat'
                            src='https://www.aion.com.cn/web/pc/images/information-announcement/wx-icon.png'
                            alt='WeChat'
                        />
                    </a>
                    <span>官方公众号</span>
                    {/* <div className='pic-box'>
                        <img
                            src='/web/pc/images/change-logo-img/foot-download-qrcode.png?v=20230328'
                            alt='QR Code'
                        />
                    </div> */}
                </div>
                <div className='flex-box-column'>
                    <a href='https://weibo.com/gacne' target='_blank' rel='noopener noreferrer'>
                        <img
                            src='https://www.aion.com.cn/web/pc/images/information-announcement/wb-icon.png'
                            alt='Weibo'
                        />
                    </a>
                    <span>官方微博</span>
                </div>
                <div className='flex-box-column'>
                    <a href='javascript:void(0)'>
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
    );
}

export default Footer;