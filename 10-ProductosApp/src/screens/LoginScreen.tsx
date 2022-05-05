import React from 'react';
import {Keyboard, KeyboardAvoidingView, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Background} from '../component/Background';
import {WhiteLogo} from '../component/WhiteLogo';
import { useForm } from '../hooks/useForm';
import {loginStyles} from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({navigation}:Props) => {

    const {email,password,onChange} = useForm({
        email:'',
        password:'',
    });

    const onLogin = () => {
        console.log({email,password});
        Keyboard.dismiss();
    }

  return (
    <>
      {/* Background */}
      <Background />

      <KeyboardAvoidingView
        style={{flex:1}}
        behavior='height'
      >
        <View style={loginStyles.formcontainer}>
          {/* keyboard avoid view */}
          <WhiteLogo />

          <Text style={{...loginStyles.title}}>LogIn</Text>

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
            onSubmitEditing={onLogin}

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
            onSubmitEditing={onLogin}

            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Boton Login */}
          <View style={loginStyles.btncontainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.boton}
              onPress={onLogin}>
              <Text style={loginStyles.btntext}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Crear una nueva cuenta */}
          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={loginStyles.btntext}>Nueva Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
