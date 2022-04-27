import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';


interface Props{
    menuItem: MenuItem
}

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;


export const FlatListItem = ({menuItem}:Props) => {

    const navigation = useNavigation<HomeScreenProps>();

  return (
      <TouchableOpacity
        onPress={()=> navigation.navigate(menuItem.component as any)}
      >
            <View style={styles.container}>
                    <Icon
                        name={menuItem.icon}
                        color='red'
                        size={23}
                    />
                    <Text style={styles.itemText}>{menuItem.name}</Text>

                    <View style={{flex:1}}/>

                    <Icon
                        name='arrow-forward-outline'
                        color='red'
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
         fontSize:18
    }
});
