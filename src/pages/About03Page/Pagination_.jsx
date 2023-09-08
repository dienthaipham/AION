import React, { useState } from 'react';

function Pagination_(props) {
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

    return (
        <div>
            {createList().map((item) => {
                return (
                    <span
                        onClick={() => {
                            if (Number.isInteger(item)) setActiveIndex(item);
                        }}
                        style={{ padding: '0 5px' }}>
                        {item}
                    </span>
                );
            })}
        </div>
    );
}

export default Pagination_;
