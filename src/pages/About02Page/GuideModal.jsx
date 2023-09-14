import React from 'react';
import './GuideModal.scss';

function GuideModal(props) {
    return (
        <div class='guide-mask guide-app'>
            <div class='pop clearfix'>
                <div class='tit-pic'>
                    <p>发现更多精致周边尽在</p>
                    <img src='/web/pc/images/tit-app.png' />
                </div>
                <div class='guide-code'>
                    <div class='left'>
                        <a href='/app-download/app.php?dev=ios' target='_Blank' class='app-store'>
                            <img src='/web/pc/images/app-store.png' />
                        </a>
                        <a href='/app-download/app.php?dev=android' target='_Blank' class='android'>
                            <img src='/web/pc/images/android.png' />
                        </a>
                    </div>
                    <div class='right'>
                        <img src='/web/pc/images/service-code.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuideModal;
