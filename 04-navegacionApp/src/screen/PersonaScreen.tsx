import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RouteStackPatams } from '../navigator/StackNavigator';

// interface RouteParams{
//     id:number;
//     nombre:string;
// }

interface Props extends StackScreenProps<RouteStackPatams,'Persona'>{};

export const PersonaScreen = ({route,navigation}:Props) => {

    // const params = route.params as RouteParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])
    

  return (
      <View style={styles.globalmargin}>
            <Text style={styles.title}>
              {
                  JSON.stringify(params,null,3)
              }
            </Text>
      </View>
  )
}
