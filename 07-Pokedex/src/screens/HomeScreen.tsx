import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UsePokemonPaginated } from '../hooks/UsePokemonPaginated';
import { act } from 'react-test-renderer';

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  const {setIsloading,simplePokemonList,loadPokemons} = UsePokemonPaginated();

  return (
    <View>
      {/* <Text>      
        <Icon name="star-outline" size={30} color="#900" />
      </Text> */}

      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <Text style={{
        ...styles.title,
        top:top+20,
        ...styles.globalmargin
      }}>
        Pokedex
      </Text>

      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon)=>pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <Image
            source={{uri:item.picture}}
            style={{
              width:100,
              height:100
            }}
          />
        )}

        //infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}

        ListFooterComponent={
          <ActivityIndicator 
            style={{
              height:150,
            }}
            size={20}
            color='grey'
          />
        }
      />
    </View>
  )
}
