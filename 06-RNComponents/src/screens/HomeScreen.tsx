import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {styles}  from '../theme/AppTheme';
import { FlatListItem } from '../components/FlatListItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';




export const HomeScreen = () => {


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
                ListHeaderComponent={()=><HeaderTitle title='Opciones de Menu'/>}
                ItemSeparatorComponent={()=>itemSeparator()}
            />
    </View>
  )
}
