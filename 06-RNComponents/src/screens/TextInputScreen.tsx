import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';
import { useState } from 'react';
import { useForm } from '../hooks/UseForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {
    
    const {form,onChange,isSubscribe} = useForm({
            name:'',
            email:'',
            phone:'',
            isSubscribe:false
    });

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>

            <View style={styles.globalmargin}>
                <HeaderTitle title='TextInputs'/>

                <TextInput
                    style={stylesscreen.inputStyle}
                    placeholder={'Ingrese su nombre'}
                    autoCorrect={false}
                    autoCapitalize='words'
                    onChangeText={(value)=>onChange(value,'name')}
                />
                <TextInput
                    style={stylesscreen.inputStyle}
                    placeholder={'Ingrese su email'}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(value)=>onChange(value,'email')}
                    keyboardType="email-address"

                />

                <View style={stylesscreen.switchRow}>
                    <Text style={stylesscreen.switchtext}>Suscribirse</Text>
                    <CustomSwitch isOn={isSubscribe} onChange={(value)=>onChange(value,'isSubscribe')}/>
                </View>

                <HeaderTitle title={JSON.stringify(form,null,3)}/>

                <TextInput
                    style={stylesscreen.inputStyle}
                    placeholder={'Ingrese su telefono'}
                    onChangeText={(value)=>onChange(value,'phone')}
                    keyboardType='phone-pad'
                />
            </View>
            <View style={{height:100}}/>

        </ScrollView>       
      </KeyboardAvoidingView>
  )
}

const stylesscreen = StyleSheet.create({
    inputStyle:{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        height:40,
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10

    },
    switchtext:{
        fontSize:25
    }
});
