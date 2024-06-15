import { useState, useEffect } from 'react';

export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = () => {
        setTargetReached(window.innerWidth > width);
    };

    useEffect(() => {
        updateTarget();
        window.addEventListener('resize', updateTarget);
        return () => window.removeEventListener('resize', updateTarget);
    }, []);

    return targetReached;
};
