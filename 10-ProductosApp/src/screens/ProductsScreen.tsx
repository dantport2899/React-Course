import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductStackParams } from '../navigation/ProductsNavigator';

interface Props extends StackScreenProps<ProductStackParams,'ProductsScreen'>{};

export const ProductsScreen = ({navigation}:Props) => {

    const {products, loadProducts} = useContext(ProductsContext);
    const [isRefreshing, setisRefreshing] = useState(false)


    useEffect(() => {
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{marginRight:10}}
                    onPress={
                        ()=>navigation.navigate('ProductScreen',{})
                    }
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            )
        });
    }, [])
    
    const loadProductsFromBackend =async () => {
        setisRefreshing (true);
        await loadProducts();
        setisRefreshing(false);

    }

  return (
    <View style={{flex:1,marginHorizontal:10}}>
        <FlatList
            data={products}
            keyExtractor={(p)=>p._id}
            renderItem={({item})=>(
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={
                        ()=>navigation.navigate('ProductScreen',{
                            id:item._id,
                            name:item.nombre
                        })
                    }
                >
                    <Text style={styles.productsName}>{item.nombre}</Text>
                </TouchableOpacity>
            )}

            ItemSeparatorComponent={()=>(
                <View style={styles.itemseparator}></View>
            )}

            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={loadProductsFromBackend}
                />
            }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    productsName:{
        fontSize:20,
    },
    itemseparator:{
        borderBottomWidth:2,
        borderBottomColor:'rgba(0,0,0,0.5)',
        marginVertical:5
    }
});