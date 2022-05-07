import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { Text, View, StyleSheet, Button } from 'react-native';
import { ProductStackParams } from '../navigation/ProductsNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useCategories } from '../hooks/useCategories';

interface Props extends StackScreenProps<ProductStackParams,'ProductScreen'>{};

export const ProductScreen = ({route,navigation}:Props) => {
  const {id,name=""} = route.params;

  const [selectedLanguage, setSelectedLanguage] = useState();
  const {isLoading,categories} = useCategories();

  useEffect(() => {
    navigation.setOptions({
      title:(name)? name: 'Nuevo Producto'
    })
  }, [])
  
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del Producto: </Text>
        <TextInput
          placeholder='Producto'
          style={styles.textinput}
        />

        {/* Picker */}
        <Text style={styles.label}>Categoria: </Text>

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
          >
            {
              categories.map(c =>(
                <Picker.Item label={c.nombre} value={c._id} key={c._id}/>
              ))
            }
        </Picker>

        
        <View style={{flexDirection:'row', justifyContent:'center',marginTop:10,marginBottom:20}}>
          <Button
            title='Camara'
            onPress={()=>{}}
            color='#5856D6'
          />

        <View style={{width:10}}></View>

          <Button
            title='Galeria'
            onPress={()=>{}}
            color='#5856D6'
          />

        </View>


        <Button
            title='Guardar'
            onPress={()=>{}}
            color='#5856D6'
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:10,
      marginHorizontal:20,
    },
    label:{
      fontSize:18,
    },
    textinput:{
      borderWidth:1,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:20,
      borderColor:'rgba(0,0,0,0.2)',
      height:45,
      marginTop:10,
      marginBottom:20,
    }
});
