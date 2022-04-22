import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screen/ChatScreen';
import { ContactScreen } from '../screen/ContactScreen';
import { AlbunScreen } from '../screen/AlbunScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top:paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={({route}) => ({
            tabBarPressColor:colores.primary,
            tabBarShowIcon:true,
            tabBarIndicatorStyle:{
                backgroundColor: colores.primary
            },
            tabBarStyle:{
                borderBottomColor: colores.primary,
                borderBottomWidth: 0,
                elevation:0
            },
            tabBarLabelStyle:{
                fontSize:12
            },
            tabBarIcon: ({color, focused}) =>{
                let iconName: string='';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName='chatbubbles-outline';
                    break;
                    
                    case 'ContactScreen':
                        iconName='people-outline';
                    break;

                    case 'AlbunScreen':
                        iconName='bookmarks-outline';
                    break;
                
                    default:
                        break;
                }

                return <Icon name={iconName} size={22} color={color} />
            }

        })}
        
        
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbunScreen" component={AlbunScreen} />
    </Tab.Navigator>
  );
}