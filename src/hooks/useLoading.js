import { useState, useEffect } from 'react';

const useLoading = (timeoutDuration = 2000) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, timeoutDuration);

        return () => clearTimeout(timeout);
    }, [timeoutDuration]);

    return loading;
};

export default useLoading;
