import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white',
           
        }}
        screenOptions={{ 
            headerShown:false,
            tabBarActiveTintColor: '#5856D5',
            tabBarLabelStyle:{
                marginBottom:10,
                fontSize:12, 
            },
            tabBarStyle:{
                borderWidth: 0,
                elevation: 0,
                height:60,
                position:'absolute',
                backgroundColor:'rgba(255,255,255,0.92)'
            }

        }}
        
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={StackNavigator} 
        options={{
            tabBarLabel:'Listado',
            tabBarIcon:({color})=> <Icon  name='list-outline' color={color} size={25}/>
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Tab2Screen} 
        options={{
            tabBarLabel:'Listado',
            tabBarIcon:({color})=> <Icon  name='search-outline' color={color} size={25}/>
        }}
      />
    </Tab.Navigator>
  );
}