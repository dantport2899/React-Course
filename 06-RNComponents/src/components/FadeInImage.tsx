import React, { useContext } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { UseAnimation } from '../hooks/UseAnimation';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props{
    uri:string;
    style?:StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri,style}:Props) => {
  const {theme:{colors}} = useContext(ThemeContext);
    const {opacity,fadeIn} = UseAnimation();
    const [isLoading, setisLoading] = useState(true);

    const finishLoading = () => {
        setisLoading(false)
        fadeIn();
    }

  return (
      <View  style={{
          justifyContent:"center",
          alignItems:'center'
      }}>
          {
              isLoading && 
                <ActivityIndicator 
                style={{position:'absolute'}} 
                color={colors.primary} 
                size={30}/>
          }
        <Animated.Image
            source={{uri}}
            onLoadEnd={finishLoading}
            style={{
                ...style as any,
                // width:500,
                // height:400,
                opacity:opacity
            }}
        />
      </View>
    
  )
}
