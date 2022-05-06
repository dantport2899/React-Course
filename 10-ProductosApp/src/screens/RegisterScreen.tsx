import React, { useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../component/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any,any>{}

export const RegisterScreen = ({navigation}:Props) => {

  const {signUp,errorMessage,removeError} = useContext(AuthContext);

  const {email,password,name,onChange} = useForm({
    name:'',
    email:'',
    password:'',
  });

  useEffect(() => {
    if(errorMessage.length === 0) return

    Alert.alert(
      'Registro incorrecto', errorMessage,
       [{
           text:'ok',
           onPress: removeError
        }]
       );
  }, [errorMessage])

  const onRegister = () => {
      console.log({name,email,password});
      Keyboard.dismiss();
      signUp({
        nombre:name,
        password,
        correo:email
      })
  }
  return (
    <>
      <KeyboardAvoidingView
        style={{flex:1, backgroundColor:'#5856D6'}}
        behavior='height'
      >
        <View style={loginStyles.formcontainer}>
          {/* keyboard avoid view */}
          <WhiteLogo />

          <Text style={{...loginStyles.title}}>Registro</Text>

          <Text style={{...loginStyles.label}}>Nombre</Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={loginStyles.inputfield}
            selectionColor="white"

            onChangeText={(value)=>onChange(value,'name')}
            value={name}
            // onSubmitEditing={onRegister}

            autoCapitalize="words"
            autoCorrect={false}
          />


          <Text style={{...loginStyles.label}}>Email</Text>
          <TextInput
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={loginStyles.inputfield}
            selectionColor="white"

            onChangeText={(value)=>onChange(value,'email')}
            value={email}
            // onSubmitEditing={onRegister}

            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={{...loginStyles.label}}>Contraseña</Text>
          <TextInput
            placeholder="**********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry={true}
            style={loginStyles.inputfield}
            selectionColor="white"

            onChangeText={(value)=>onChange(value,'password')}
            value={password}
            onSubmitEditing={onRegister}

            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Boton Login */}
          <View style={loginStyles.btncontainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.boton}
              onPress={onRegister}>
              <Text style={loginStyles.btntext}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={()=> navigation.replace('LoginScreen')}
            activeOpacity={0.8}
            style={{
              ...loginStyles.btnreturn
            }}
          >
              <Text style={loginStyles.btntext}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
