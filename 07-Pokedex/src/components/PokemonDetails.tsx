import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull, Type} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 400,
        }}>
        <Text style={{...styles.title}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regulartext, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        {/* weight */}
        <Text style={{...styles.title}}>Weight</Text>
        <Text style={{...styles.regulartext}}>{pokemon.weight}kg</Text>
      </View>

      {/* Sprites */}
      <View
        style={{
          ...styles.container,
        }}>
        <Text style={{...styles.title}}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicsprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicsprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicsprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicsprite}
        />
      </ScrollView>

      {/* pasive */}
      <View
        style={{
          ...styles.container,
        }}>
        <Text style={{...styles.title}}>Pasive</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regulartext, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View
        style={{
          ...styles.container,
        }}>
        <Text style={{...styles.title}}>Stats</Text>
        <View style={{}}>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{...styles.regulartext, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>

              <Text style={{...styles.regulartext, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Moves */}
      <View
        style={{
          ...styles.container,
        }}>
        <Text style={{...styles.title}}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regulartext, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View
        style={{
          marginBottom: 100,
          alignItems: 'center',
        }}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicsprite}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regulartext: {
    fontSize: 17,
  },
  basicsprite: {
    height: 100,
    width: 100,
  },
});
