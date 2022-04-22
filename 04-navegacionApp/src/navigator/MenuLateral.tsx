import * as React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();


//poner un stack en la pagina de settings

// const Stack = createStackNavigator();
// const SettinsStackscreen = () =>{
//   return(
//     <Stack.Navigator>
//         <Stack.Screen
//           name="SettingsScreen"
//           component={SettingsScreen}
//         />
//     </Stack.Navigator>
//   )
// }

export const MenuLateral = () => {

const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
    }}

    drawerContent={(props)=> <Menuinterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" options={{title:'Home'}} component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const Menuinterno = ({navigation}:DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarcontainer}>
        <Image 
        source={{uri:'https://cdn-icons-png.flaticon.com/512/147/147144.png'}}
        style={styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      <View style={styles.menucontainer}>
        <TouchableOpacity 
          style={{...styles.menuboton,flexDirection:'row'}}
          onPress={()=>navigation.navigate('Tabs')}
        >
          <Icon name='globe-outline' size={25} color={colores.primary} />
          <Text style={styles.menuitemcontent}> Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuboton,flexDirection:'row'}}
          onPress={()=>navigation.navigate('SettingsScreen')}
        >
          <Icon name='settings-outline' size={25} color={colores.primary} />
          <Text style={styles.menuitemcontent}> Settings</Text>
        </TouchableOpacity> 

      </View>

    </DrawerContentScrollView>
  )
}