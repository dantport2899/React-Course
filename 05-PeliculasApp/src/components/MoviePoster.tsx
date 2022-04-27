import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;


interface Props{
    movie: Movie;
    height?:number;
    width?:number;
}

export const MoviePoster = ({movie, height=420,width=300}:Props) => {

    const uri = 'https://image.tmdb.org/t/p/w500/'+movie.poster_path;

    const navigation = useNavigation<HomeScreenProps>();

  return (
      <TouchableOpacity 
        onPress={()=>navigation.navigate('DetailScreen',movie)}
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:7
        }
      }>
          <View style={styles.contenedor}>
            <Image
                source={{uri}}
                style={styles.image}
            />
          </View>
          
      </TouchableOpacity>
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
