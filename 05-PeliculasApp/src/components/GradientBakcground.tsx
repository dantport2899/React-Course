import React, { useContext } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import { UseFade } from '../hooks/UseFade';

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const GradientBakcground = ({children}:Props) => {
    // @ts-expect-error
    const {colors,previuscolors,setPrevMaincolors} = useContext(GradientContext);

    const {opacity,fadeIn,fadeOut} = UseFade();

    useEffect(() => {
        fadeIn(()=>{
            setPrevMaincolors(colors);
            fadeOut(0);
        });    
    }, [colors]);
    
    
  return (
      <View style={{flex:1}}>
          <LinearGradient
            colors={[previuscolors.primary,previuscolors.secundary,'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1,y:0.1}}
            end={{x:0.5,y:0.7}}
          />

          <Animated.View
            style={{...StyleSheet.absoluteFillObject,opacity:opacity}}
            >
                <LinearGradient
                    colors={[colors.primary,colors.secundary,'white']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x:0.1,y:0.1}}
                    end={{x:0.5,y:0.7}}
                />
          </Animated.View>
          {children}
      </View>
  )
}
