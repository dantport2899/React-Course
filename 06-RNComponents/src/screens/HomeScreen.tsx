import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles}  from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { FlatListItem } from '../components/FlatListItem';


const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        components:'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        components:'Animation102Screen'
    }
]

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const renderListHeader = ()=>{
        return(
            <View style={{marginTop:top+20, marginBottom:20}}>
                <Text style={styles.title}>Opciones de menu</Text>
            </View>
        )
    }

    const itemSeparator = ()=>{
        return(
            <View style={{borderBottomWidth:1, marginTop:5, marginBottom:5}}>
            </View>
        )
    }

  return (
    <View style={{flex:1, ...styles.globalmargin}}>
        
            {/* <Icon name="airplane-outline" size={30} color="#900" />; */}

            <FlatList
                data={menuItems}
                renderItem={ ({ item }) => <FlatListItem menuItem={item}/>}
                keyExtractor={(item)=>item.name}
                ListHeaderComponent={()=>renderListHeader()}
                ItemSeparatorComponent={()=>itemSeparator()}
            />
    </View>
  )
}
