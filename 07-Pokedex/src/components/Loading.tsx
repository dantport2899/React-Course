import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={{...styleslocales.activitycontaienr}}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Cargando...</Text>
    </View>
  );
};

const styleslocales = StyleSheet.create({
    activitycontaienr: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });