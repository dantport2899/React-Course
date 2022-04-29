import React, { useContext } from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { UseAnimation } from '../hooks/UseAnimation';

export const Animation101Screen = () => {
  
    const {opacity,position,fadeIn,fadeOut,startMovingPosition} = UseAnimation();
    const {theme:{colors}} = useContext(ThemeContext);


  return (
    <View style={styles.container}>
        <Animated.View style={{
            ...styles.purpleBoxL, 
            opacity:opacity,
            backgroundColor:colors.primary,

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
            color={colors.primary}
        />

        <Button
            title='FadeOut'
            onPress={fadeOut}
            color={colors.primary}

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
        width:150,
        height:150,
    }
});
