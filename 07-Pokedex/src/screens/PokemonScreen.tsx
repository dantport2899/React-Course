import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({navigation,route}:Props) => {

  const {simplePokemon, color} = route.params;
  const {name,id,picture} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {isLoading,pokemon} = usePokemon(id);
  console.log(pokemon);

  return (
    <View style={{flex:1}}>
      {/* Header container */}
      <View style={{
          ...styles.headercontainer,
          backgroundColor:color,
        }}>
          <TouchableOpacity
            onPress={()=>navigation.pop()}
            activeOpacity={0.8}
            style={{
              ...styles.backbotton,
              top:top+5,
            }}
          >
            <Icon
            name='arrow-back-outline'
            color='white'
            size={35}
            />
          </TouchableOpacity>

          <Text
            style={{
              ...styles.pokemoname,
              top:top+45
            }}
          >
            {name + '\n'}#{id}
          </Text>

          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={{
              ...styles.pokeball
            }}
          />

          <FadeInImage
            uri={picture}
            style={styles.pokemonimage}
          />
      </View>

      {/* Detalles */}
      {
        isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator
              color={color}
              size={50}
            />
          </View>
        )
        : <PokemonDetails pokemon={pokemon}/>
      }
    </View>
    
  )
}

const styles = StyleSheet.create({
    headercontainer:{
      height:370,
      zIndex:999,
      alignItems:'center',
      borderBottomRightRadius:1000,
      borderBottomLeftRadius:1000,
    },
    backbotton:{
      position:'absolute',
      left:20,
      
    },
    pokemoname:{
      color:"white",
      fontSize:40,
      alignSelf:'flex-start',
      left:20,
      textTransform:'uppercase'
    },
    pokeball:{
      width:250,
      height:250,
      bottom:-20,
      opacity:0.7,
    },
    pokemonimage:{
      width:250,
      height:250,
      position:'absolute',
      bottom:-15,
    },
    loading:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});