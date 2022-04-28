import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {styles}  from '../theme/AppTheme';
import { FlatListItem } from '../components/FlatListItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';




export const HomeScreen = () => {

  return (
    <View style={{flex:1, ...styles.globalmargin}}>
        
            {/* <Icon name="airplane-outline" size={30} color="#900" />; */}

            <FlatList
                data={menuItems}
                renderItem={ ({ item }) => <FlatListItem menuItem={item}/>}
                keyExtractor={(item)=>item.name}
                ListHeaderComponent={()=><HeaderTitle title='Opciones de Menu'/>}
                ItemSeparatorComponent={()=><ItemSeparator/>}
            />
    </View>
  )
}
