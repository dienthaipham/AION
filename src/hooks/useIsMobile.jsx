import { useState, useEffect } from 'react';

// ******** Check mobile or tablet ********
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // initial value

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // cleanup on unmount
    }, []);

    return isMobile;
};

export default useIsMobile;
