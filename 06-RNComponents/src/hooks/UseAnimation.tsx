import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const UseAnimation = () => {
    
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;
 
    const fadeIn= () =>{
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:300,
                useNativeDriver:true
            }    
        ).start();

        // Animated.timing(
        //     top,{
        //         toValue:0,
        //         duration:700,
        //         useNativeDriver:true,
        //         easing:Easing.bounce  //EFECTO DE REBOTE
        //     }
        // ).start();
    }

    const fadeOut= () =>{
        Animated.timing(
            opacity,
            {
                toValue:0,
                duration:300,
                useNativeDriver:true
            }    
        ).start();

        // Animated.timing(
        //     top,{
        //         toValue:-100,
        //         duration:700,
        //         useNativeDriver:true
        //     }
        // ).start();
    }

    const startMovingPosition = (initPosition:number,duration:number=300) => {

        position.setValue(initPosition);

        Animated.timing(
            position,{
                toValue:0,
                duration:700,
                useNativeDriver:true,
                // easing:Easing.bounce  //EFECTO DE REBOTE
            }
        ).start();
    }

    return{
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
