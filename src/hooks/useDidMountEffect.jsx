import { useEffect, useRef } from 'react';

export const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);
    console.log(didMount);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};
