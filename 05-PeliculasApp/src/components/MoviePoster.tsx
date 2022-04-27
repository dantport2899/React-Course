import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props{
    movie: Movie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie, height=420,width=300}:Props) => {
    const uri = 'https://image.tmdb.org/t/p/w500/'+movie.poster_path;
  return (
      <View style={{
          width,
          height,
          marginHorizontal:8
      }}>
          <View style={styles.contenedor}>
            <Image
                source={{uri}}
                style={styles.image}
            />
          </View>
          
      </View>
  )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,
        
    },
    contenedor:{
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5,

        elevation: 5,
        
    }
});
