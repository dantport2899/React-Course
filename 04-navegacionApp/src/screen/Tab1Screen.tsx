import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab1Screen effect');
        
    }, [])
  return (
      <View style={styles.globalmargin}>
        <Text style={styles.title}>Iconos</Text>

        <Text>
            <TouchableIcon iconName="rocket" />
            <TouchableIcon iconName="game-controller-outline" />
            <TouchableIcon iconName="glasses-outline" />
            <TouchableIcon iconName="pizza-outline" />
            <TouchableIcon iconName="save-outline" />
            <TouchableIcon iconName="skull-outline" />
        </Text>
      </View>
  )
}
