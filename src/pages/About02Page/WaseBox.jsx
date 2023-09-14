import React from 'react';
import './WaseBox.scss';

function WaseBox(props) {
    const { image, title } = props;

    return (
        <div className='box-wrapper'>
            <div className='img-wrapper'>
                <img src={image} />
            </div>

            <div class='dit '>
                <p class='opt' title='AION S Plus合金玩具车模'>
                    {title}
                </p>
                <div class='clearfix hit'>
                    <a class='buy-btn' data-ol-has-click-handler=''>
                        商城购买
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WaseBox;
