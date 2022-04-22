import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect');
    
}, [])
  return (
      <View>
          <Text>Tab2Screen</Text>
      </View>
  )
}
