import React, { useState } from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {UsePokemonSearch} from '../hooks/UsePokemonSearch';
import { styles } from '../theme/AppTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = UsePokemonSearch();

  const [pokemonFiltered, setpokemonFiltered] = useState<SimplePokemon[]>([])

  const [term, setterm] = useState('');

  useEffect(() => {
    if(term.length === 0){
      return setpokemonFiltered([]);
    }

    if(isNaN(Number(term))){
      setpokemonFiltered(
        simplePokemonList.filter(
          poke => poke.name.toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()))
      )
    }else{
      
        const pokemonById = simplePokemonList.find((poke)=> poke.id === term);
        setpokemonFiltered(
          (pokemonById)? [pokemonById]:[]
        );
    }

    
  }, [term])
  

  if (isFetching) {
    return  <Loading/>
  }

  return (
    <View
      style={{
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput 
        onDebbounce={(value)=> setterm(value)}
        style={{
            position:'absolute',
            width:screenWidth-40,
            zIndex:999,
            top: (Platform.OS=='ios')?top:top+30
        }}
      />

      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              paddingBottom: 10,
              ...styles.globalmargin,
              marginTop: (Platform.OS=='ios')?top+60 :top+80
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
       
      />
    </View>
  );
};

const styleslocales = StyleSheet.create({
  
});
