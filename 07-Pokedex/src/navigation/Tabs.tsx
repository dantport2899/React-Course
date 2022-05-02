import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { StackNavigator } from './StackNavigator';
import { styles } from '../../../04-navegacionApp/src/theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

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
        component={SearchScreen} 
        options={{
            tabBarLabel:'Listado',
            tabBarIcon:({color})=> <Icon  name='search-outline' color={color} size={25}/>
        }}
      />
    </Tab.Navigator>
  );
}