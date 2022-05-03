import React, {useState} from 'react'
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';
import { useEffect } from 'react';

interface Props{
    onDebbounce:(value:string)=>void;
    style?:StyleProp<ViewStyle>;
}

export const SearchInput = ({style,onDebbounce}:Props) => {

    const [textValue, settextValue] = useState('');

    const debounceValue = useDebounceValue(textValue,1500);

    useEffect(() => {
        onDebbounce(debounceValue!);
    }, [debounceValue])
    

  return (
      <View style={{
          ...styles.container,
          ...style as any
        }}>
          <View style={styles.textbackground}>
                <TextInput
                    placeholder='Buscar Pokemon'
                    style={styles.textinput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={settextValue}
                />
                <Icon
                    name='search-outline'
                    color='grey'
                    size={30}
                />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
    },
    textbackground:{
        backgroundColor:'#F3F1F3',
        borderRadius: 50,
        height:40,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        
    },
    textinput:{
        flex:1,
        fontSize:18,
        top:2,
    }
});
