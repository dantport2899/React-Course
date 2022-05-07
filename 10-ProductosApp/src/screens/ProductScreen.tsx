import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import {ProductStackParams} from '../navigation/ProductsNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect, useContext,} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useCategories} from '../hooks/useCategories';
import {useForm} from '../hooks/useForm';
import {ProductsContext} from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id = '', name = ''} = route.params;

  const {categories} = useCategories();

  const {loadProductById,addProduct,updateProduct} = useContext(ProductsContext);

  const {_id, categoriaId, nombre, img, form, onChange, setFormValue} = useForm(
    {
      _id: id,
      categoriaId: '',
      nombre: name,
      img: '',
    },
  );

  useEffect(() => {
    navigation.setOptions({
      title: nombre ? nombre : 'Producto sin Nombre',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) return;
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };

  const saveOrUpdate = async() => {
    if (_id.length > 0) {
      updateProduct(categoriaId,nombre,id);
    } else {

      const tempcategoriaId = categoriaId || categories[0]._id
      const newProduct = await addProduct(categoriaId,nombre);
      onChange(newProduct._id, '_id');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del Producto: </Text>
        <TextInput
          placeholder="Producto"
          style={styles.textinput}
          value={nombre}
          onChangeText={value => onChange(value, 'nombre')}
        />

        {/* Picker */}
        <Text style={styles.label}>Categoria: </Text>

        <Picker
          selectedValue={categoriaId}
          onValueChange={value => onChange(value, 'categoriaId')}>
          {categories.map(c => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
          ))}
        </Picker>

        {_id.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 20,
            }}>
            <Button title="Camara" onPress={() => {}} color="#5856D6" />

            <View style={{width: 10}}></View>

            <Button title="Galeria" onPress={() => {}} color="#5856D6" />
          </View>
        )}

        <Button title="Guardar" onPress={saveOrUpdate} color="#5856D6" />

        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{width: '100%', height: 300, marginTop: 20}}
          />
        )}

        {/* Imagen Temporal */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textinput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 10,
    marginBottom: 20,
  },
});
