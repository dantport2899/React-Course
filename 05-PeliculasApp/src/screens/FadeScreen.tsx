import React from 'react'
import { Animated, Button, View } from 'react-native'
import { UseFade } from '../hooks/UseFade';

export const FadeScreen = () => {
  
  const {fadeIn,fadeOut,opacity} = UseFade();

    return (
      <View style={{
          flex:1, 
          backgroundColor:'gray',
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Animated.View  style={{
              backgroundColor:'blue',
              width:150,
              height:150,
              borderColor:'white',
              borderWidth:10,
              marginBottom:10,
              opacity: opacity
            }}>

          </Animated.View>

          <Button
            title='FadeIn'
            // onPress={fadeIn}
          />

          <Button
            title='FadeOut'
            onPress={fadeOut}
          />
      </View>
  )
}
