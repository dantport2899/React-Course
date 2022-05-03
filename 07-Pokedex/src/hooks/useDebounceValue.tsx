import { useState, useEffect } from 'react';

export const useDebounceValue = (input:string='',time:number=500) => {
    const [debounceValue, setdebounceValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setdebounceValue(input);
        }, time);

        return () => {
            clearTimeout(timeout);
        }
    }, [input])
    

    return debounceValue
}
