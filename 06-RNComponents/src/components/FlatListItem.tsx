import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props{
    menuItem: MenuItem
}

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;


export const FlatListItem = ({menuItem}:Props) => {

    const navigation = useNavigation<HomeScreenProps>();
    // const {colors} = useTheme();
    const {theme:{colors}} = useContext(ThemeContext);
    

  return (
      <TouchableOpacity
        onPress={()=> navigation.navigate(menuItem.component as any)}
      >
            <View style={styles.container}>
                    <Icon
                        name={menuItem.icon}
                        color={colors.primary}
                        size={23}
                    />
                    <Text style={{
                        ...styles.itemText,
                        color:colors.text
                        // color:colors.text
                    }}>{menuItem.name}</Text>

                    <View style={{flex:1}}/>

                    <Icon
                        name='arrow-forward-outline'
                        color={colors.primary}
                        size={23}
                    />        
            </View>
      </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:5,
        fontSize:18,
    }
});
