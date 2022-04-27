// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import React, { useContext } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, View } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { UseMovies } from '../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBakcground } from '../components/GradientBakcground';
import ImageColors from 'react-native-image-colors';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
// type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

const Windowwidth  = Dimensions.get('window').width;

export const HomeScreen = () => {

    // const navigation = useNavigation<HomeScreenProps>();
   const {now_playing,popular,top_rated,upcoming,isLoading} = UseMovies();
   const {top} = useSafeAreaInsets();
    // @ts-expect-error
    const {setMaincolors} = useContext(GradientContext);

   const getPosterColors = async(index:number) =>{
      const uri = 'https://image.tmdb.org/t/p/w500/'+now_playing[index].poster_path;
      const [primary='green',secundary='orange'] = await getImageColors(uri);
      setMaincolors({primary,secundary});
    } 

    useEffect(() => {
      if (now_playing.length>0) {
        getPosterColors(0);
      }
    }, [now_playing])
    

   if (isLoading) {
       return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignContent:'center'
            }}>
                <ActivityIndicator color={'red'} size={100}></ActivityIndicator>
            </View>
       )
   }

  return (

    <GradientBakcground>
      <ScrollView>
              <View style={{marginTop:top + 20}}>
                {/* Carrusel principal */}
                <View style={{height: 440}}>
                      <Carousel
                          data={now_playing}
                          renderItem={({item}:any)=> <MoviePoster movie={item}/>}
                          sliderWidth={Windowwidth}
                          itemWidth={300}
                          inactiveSlideOpacity={0.9}  
                          onSnapToItem={index=>getPosterColors(index)}                             
                      />
                </View>
              
              {/* Peliculas populares */}
              <HorizontalSlider title='Peliculas Populares' movies={popular}></HorizontalSlider>

              {/* Peliculas mejor calificadas */}
              <HorizontalSlider title='Peliculas mejor calificadas' movies={top_rated}></HorizontalSlider>

              {/* Peliculas por venir */}
              <HorizontalSlider title='Peliculas por venir' movies={upcoming}></HorizontalSlider>
                  
            </View>
      </ScrollView>
    </GradientBakcground>
    
      
  )
}
