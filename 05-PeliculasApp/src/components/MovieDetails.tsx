import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { styles } from '../../../04-navegacionApp/src/theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';
// import currencyFormatter from 'currency-formatter'


interface Props{
    movieFull:MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull,cast}:Props) => {
  return (
      <View>
          <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:'row'}}>
                    <Icon
                        name='star-outline'
                        color='grey'
                        size={16}
                    />
                    <Text style={{marginLeft:8}}>{movieFull.vote_average}</Text>

                    <Text style={{marginLeft:5}}>
                        - { movieFull.genres.map(g=>g.name).join(', ')}
                    </Text>
                </View>

                <View>
                    {/* Historia */}
                    <Text style={{fontSize:23,marginTop:20,fontWeight:'bold'}}>
                        Historia
                    </Text>
                    <Text style={{fontSize:16}}>
                        {movieFull.overview}
                    </Text>

                    {/* Presupuesto */}
                    <Text style={{fontSize:23,marginTop:20,fontWeight:'bold'}}>
                        Presupuesto
                    </Text>
                    <Text style={{fontSize:18}}>
                        {/* {currencyFormatter.format(movieFull.budget,{code:'USD'})} */}
                        {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format( movieFull.budget)}
                    </Text>
                </View>

                {/* Casting */}
                <View style={{marginTop:10, marginBottom:100}}>
                    <Text style={{fontSize:23,marginTop:20,marginBottom:10,fontWeight:'bold', marginHorizontal:20}}>
                        Reparto
                    </Text>

                    <FlatList style={{marginBottom:5, height:70}}
                        data={cast}
                        keyExtractor={(item)=>item.id.toString()}
                        renderItem={({item})=> <CastItem actor={item}/>}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                
          </View>
      </View>
  )
}
