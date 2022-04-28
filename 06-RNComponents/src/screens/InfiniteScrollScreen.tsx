import React from 'react'
import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';
import { FadeInImage } from '../components/FadeInImage';

export const InfiniteScrollScreen = () => {

    const [numbers, setnumbers] = useState([0,1,2,3,4,5,6,7,8,9,10]);

    const loadmore = () =>{
        const newArray:number[] = [];
        for(let i=0;i<5;i++){
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setnumbers([...numbers,...newArray]);
        }, 1500);

    }

    const renderitem =(item:number)=>{
        return(
            <FadeInImage 
                uri={'https://picsum.photos/id/'+item+'/500/400'}
                style={{
                    width:500,
                    height:400
                }}
            />
        )
    }
  return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <FlatList
            data={numbers}
            keyExtractor={(item)=>item.toString()}
            renderItem={({item})=>renderitem(item)}

            ListHeaderComponent={()=>(
                <View style={{marginHorizontal:20}}>
                    <HeaderTitle title='Infinite Scroll'/>
                </View>
            )}

            onEndReached={loadmore}
            onEndReachedThreshold={0.5}

            ListFooterComponent={()=>(
                <View style={{
                    height:150,
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <ActivityIndicator size={25} color="#5856D6"/>
                </View>
            )}
          />

      </View>
  )
}

const styles = StyleSheet.create({
    textitem:{
        backgroundColor:'green',
        height: 150
    }
});
