import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3Screen effect');
    
}, [])
  return (
      <View>
          <Text>Tab3Screen</Text>
      </View>
  )
}
