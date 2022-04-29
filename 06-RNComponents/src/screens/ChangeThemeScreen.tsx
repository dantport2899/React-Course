import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext);
  return (
    <View style={styles.globalmargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
                onPress={setLightTheme}
                style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                }}
                activeOpacity={0.8}>
            <Text
                style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 22,
                }}>
                Light
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={setDarkTheme}
                style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                }}
                activeOpacity={0.8}>
            <Text
                style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 22,
                }}>
                Dark
            </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};
