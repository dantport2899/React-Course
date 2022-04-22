import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screen/Tab1Screen';
import { Tab2Screen } from '../screen/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
    ? <TabsIOS></TabsIOS>
    : <TabsAndroid></TabsAndroid>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor:colores.primary
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle:{
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation:0
            },
            tabBarLabelStyle:{
                fontSize:15
            },
            tabBarIcon: ({color, focused}) =>{
                let iconName: string='';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName='duplicate-outline'
                    break;
                    
                    case 'TopTabNavigator':
                        iconName='arrow-up-circle-outline'
                    break;

                    case 'StackNavigator':
                        iconName='albums-outline'
                    break;
                
                    default:
                        break;
                }

                return <Icon name={iconName} size={25} color={color} />
            }
        })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title:'Tab 2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {

  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle:{
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation:0
            },
            tabBarLabelStyle:{
                fontSize:15
            },
            tabBarIcon: ({color, focused, size}) =>{
                let iconName: string='';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName='duplicate-outline'
                    break;
                    
                    case 'TopTabNavigator':
                        iconName='arrow-up-circle-outline'
                    break;

                    case 'StackNavigator':
                        iconName='albums-outline'
                    break;
                
                    default:
                        break;
                }

                return <Icon name={iconName} size={25} color={color} />
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab 1', tabBarIcon: (props)=><Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={Tab2Screen} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}