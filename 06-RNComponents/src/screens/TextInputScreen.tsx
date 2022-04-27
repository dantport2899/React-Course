import React from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme';
import { useState } from 'react';

export const TextInputScreen = () => {
    const [form, setform] = useState({
        name:'',
        email:'',
        phone:''
    });

    const onChange = (value:string,field:string) => {
        setform({
            ...form,
            [field]:value
        })
    } 

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

                <HeaderTitle title={JSON.stringify(form,null,3)}/>
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
    }
});
