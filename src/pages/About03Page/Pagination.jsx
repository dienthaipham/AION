import React, { useState } from 'react';

function Pagination(props) {
    const [total, setTotal] = useState(15);
    const [activeIndex, setActiveIndex] = useState(1);

    const createList = () => {
        let list = [];
        let category = 'center';
        if (activeIndex + 2 >= total) category = 'right';
        if (activeIndex - 2 <= 1) category = 'left';

        switch (category) {
            case 'left':
                list = [1, 2, 3, 4, 5, '...', total];
                break;
            case 'right':
                console.log('right');
                list = [1, '...', total - 4, total - 3, total - 2, total - 1, total];
                break;
            case 'center':
                list = [1, '...', activeIndex - 1, activeIndex, activeIndex + 1, '...', total];
                break;
        }

        return list;
    };

    const handlePrev = () => {
        if (activeIndex !== 1) setActiveIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        if (activeIndex !== total) setActiveIndex((prev) => prev + 1);
    };

    return (
        <div class='page-box'>
            <ul class='pagination' id='page-box'>
                <li data-ol-has-click-handler=''>
                    <a aria-label='Previous' onClick={() => setActiveIndex(1)}>
                        «
                    </a>
                </li>
                <li data-ol-has-click-handler=''>
                    <a onClick={handlePrev}>上一页</a>
                </li>
                {createList().map((item) => {
                    let isActive = false;
                    if (Number.isInteger(item) && item === activeIndex) isActive = true;

                    return (
                        <li className={isActive ? 'active' : ''}>
                            <a
                                onClick={() => {
                                    if (Number.isInteger(item)) setActiveIndex(item);
                                }}>
                                {item}
                            </a>
                        </li>
                    );
                })}
                <li data-ol-has-click-handler=''>
                    <a onClick={handleNext}>下一页</a>
                </li>
                <li data-ol-has-click-handler=''>
                    <a aria-label='Next' onClick={() => setActiveIndex(total)}>
                        »
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
