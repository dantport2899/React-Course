import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Movie } from '../interfaces/movieInterface';
import { UseMovieDetails } from '../hooks/UseMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

export const DetailScreen = ({route,navigation}:Props) => {
  const movie = route.params;
  const uri = 'https://image.tmdb.org/t/p/w500/'+movie.poster_path;

  const {isLoading,movieFull,cast} = UseMovieDetails(movie.id);
  
  return (
    <ScrollView>
        <View style={styles.imagecontainer}>
          <View style={styles.imageborder}>
            <Image
              source={{uri}}
              style={styles.posterimage}
            />
          </View>
      </View>

      <View style={styles.margincontainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

        {
          isLoading
            ? <ActivityIndicator size={35} color="grey" style={{marginTop:20}}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }

        {/*Boton para cerrar*/}
        <View style={styles.backbutton}>
          <TouchableOpacity
            onPress={()=>navigation.pop()}
          >
            <Icon 
              color={'white'}
              name={'arrow-back-outline'}
              size={60}
            />
          </TouchableOpacity>
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    imagecontainer:{
      width:'100%',
      height:screenHeight * 0.7,
      // overflow:'hidden',
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 9,

        elevation: 9,
    },
    imageborder:{
      flex:1,
      overflow:'hidden',
      borderBottomEndRadius:25,
      borderBottomStartRadius:25,
    },
    posterimage:{
      flex:1,
      
    },
    margincontainer:{
      marginHorizontal:20,
      marginTop:20,
    },
    subtitle:{
      fontSize:18,
      opacity:0.8
    },
    title:{
      fontSize:20,
      fontWeight:'bold'
    },
    backbutton:{
      position:'absolute',
      zIndex:9999,
      elevation:0,
      top:5,
      left:5
    }
});
