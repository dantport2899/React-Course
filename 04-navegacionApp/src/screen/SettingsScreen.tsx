import React from 'react'
import { Text, View, SafeAreaView, EdgeInsetsPropType } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  
  const isets = useSafeAreaInsets()
  
  return (
      <View style={{
        ...styles.globalmargin,
        marginTop: isets.top+20}}>
          <Text style={styles.title}>Settings Screen</Text>
      </View>
  )
}
