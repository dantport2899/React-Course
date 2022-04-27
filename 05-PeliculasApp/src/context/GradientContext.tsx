import { createContext, useState } from 'react';
import * as React from 'react';

interface ImageColors{
    primary:string;
    secundary:string;
}

interface ContextProps{
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors:ImageColors)=>void;
    setPrevMainColors: (colors:ImageColors)=>void;
}

export const GradientContext = createContext({}); //definir tipo

export const GradientProvider = ({children}:any) => {
    
    const [colors, setcolors] = useState<ImageColors>({
        primary:'transparent',
        secundary:'transparent'
    });

    const [previuscolors, setpreviuscolors] = useState<ImageColors>({
        primary:'transparent',
        secundary:'transparent'
    })

    const setMaincolors = (colors:ImageColors) => {
        setcolors(colors);
    }

    const setPrevMaincolors = (colors:ImageColors) => {
        setpreviuscolors(colors);
    }

    return(
        <GradientContext.Provider value={{
            colors,
            previuscolors,
            setMaincolors,
            setPrevMaincolors
        }}>
            {children}
        </GradientContext.Provider>
    )
}