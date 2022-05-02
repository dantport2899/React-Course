import React, { useState } from 'react'
import ImageColors from 'react-native-image-colors'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props{
    pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}:Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation<any>(); 

    useEffect(() => {
        ImageColors.getColors(pokemon.picture,{fallback:'grey'})
            .then(colors => {

                if(isMounted.current == false) return;
                (colors.platform === 'android')
                    ? setBgColor(colors.dominant || 'grey')
                    : console.log('ios');// ios setBgColor(colors.background || 'grey')
                
            });

            return () => {
                isMounted.current = false;
            }

    }, [])
    

  return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={()=>navigation.navigate('PokemonScreen',{
            simplePokemon:pokemon,
            color:bgColor
        })}
      >
          <View style={{
              ...styles.cardcontainer,
              backgroundColor:bgColor
              }}>
            
            <View>
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#'+pokemon.id}
                </Text>
            </View>
            <View style={styles.pokebolacontainer}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />
            </View>
            
            <FadeInImage
                uri={pokemon.picture}
                style={styles.pokemonimage}
            />
          </View>    
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardcontainer:{
        marginHorizontal:10,
        height:120,
        width:windowWidth*0.4,
        marginBottom:25,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        top:20,
        left:10,
    },
    pokebola:{
        width:100,
        height:100,
        position:'absolute',
        right:-25,
        bottom:-25
    },
    pokemonimage:{
        width:120,
        height:120,
        position:'absolute',
        right:-8,
        bottom:-5
    },
    pokebolacontainer:{
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:0,
        overflow:'hidden',
        opacity:0.5
    }
});