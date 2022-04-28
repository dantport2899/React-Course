import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScrenn } from '../screens/ModalScrenn';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlideScreen } from '../screens/SlideScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen:undefined;
  AlertScreen:undefined;
  TextInputScreen:undefined;
  PullToRefresh:undefined;
  CustomSectionListScreen:undefined;
  ModalScrenn:undefined;
  InfiniteScrollScreen:undefined;
  SlideScreen:undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScrenn" component={ModalScrenn} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlideScreen" component={SlideScreen} />
    </Stack.Navigator>
  );
}