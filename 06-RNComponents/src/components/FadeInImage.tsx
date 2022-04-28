import React from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { UseAnimation } from '../hooks/UseAnimation';
import { useState } from 'react';

interface Props{
    uri:string;
    style?:StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri,style}:Props) => {
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
                color='#5856D6' 
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
