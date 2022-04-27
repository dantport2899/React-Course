import React from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';
import { UseAnimation } from '../hooks/UseAnimation';

export const Animation101Screen = () => {
  
    const {opacity,position,fadeIn,fadeOut,startMovingPosition} = UseAnimation();

  return (
    <View style={styles.container}>
        <Animated.View style={{
            ...styles.purpleBoxL, 
            opacity:opacity,
            transform:[{
                translateY:position
            }]
        
        }}>

        </Animated.View>

        <Button
            title='FadeIn'
            onPress={()=>{
                fadeIn();
                startMovingPosition(-100);
            }}
        />

        <Button
            title='FadeOut'
            onPress={fadeOut}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    purpleBoxL:{
        backgroundColor:'purple',
        width:150,
        height:150,
    }
});
