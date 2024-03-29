import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props{
    title:string;
}

export const HeaderTitle = ({title}:Props) => {
    const {top} = useSafeAreaInsets();
    const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext);


  return (
    <View style={{marginTop:top+20, marginBottom:20}}>
        <Text style={{...styles.title,color:colors.text}}>{title}</Text>
    </View>
  )
}
