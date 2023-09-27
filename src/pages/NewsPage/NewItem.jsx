import React from 'react';
import './NewItem.scss';

function NewItem(props) {
    const { href, src, title, seenNum, time } = props;

    return (
        <li className='new-item'>
            <a href={href} target='_Blank'>
                <div class='new-item__left'>
                    <span>
                        <img src={src} />
                    </span>
                </div>
                <div class='new-item__right'>
                    <h5>{title}</h5>
                    <p> </p>
                    <div class='num-box'>
                        <p class='see-box'>{seenNum}</p>
                        <p class='time'>{time}</p>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default NewItem;
