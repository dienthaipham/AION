import React, { useState } from 'react';
import './GuideModal.scss';

function GuideModal(props) {
    const { open, onChangeOpen } = props;

    return (
        <div
            class='guide-mask guide-app'
            style={{ display: open ? 'block' : 'none' }}
            onClick={() => onChangeOpen(false)}>
            <div class='pop clearfix'>
                <div class='tit-pic'>
                    <p>发现更多精致周边尽在</p>
                    <img src='https://www.aion.com.cn/web/pc/images/tit-app.png' />
                </div>

                <div class='guide-code'>
                    <div class='left'>
                        <a href='/app-download/app.php?dev=ios' target='_Blank' class='app-store'>
                            <img src='https://www.aion.com.cn/web/pc/images/app-store.png' />
                        </a>
                        <a href='/app-download/app.php?dev=android' target='_Blank' class='android'>
                            <img src='https://www.aion.com.cn/web/pc/images/android.png' />
                        </a>
                    </div>

                    <div class='right'>
                        <img src='https://www.aion.com.cn/web/pc/images/service-code.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuideModal;
