import React from 'react';
import { enableLatestRenderer, Marker, Polyline } from 'react-native-maps';
import MapView from 'react-native-maps';
import {View} from 'react-native';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';
import { useRef, useEffect,useState } from 'react';

interface Props{
    markers?: Marker[];
}

export const Map = ({markers}:Props) => {

    const [showPolyLine, setshowPolyLine] = useState(true)

    const {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        userLocation,
        stopFollowUserLocation,
        routeLines,
    } = useLocation();

    const mapView = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return ()=> {
            stopFollowUserLocation();
        }
    }, []);

    useEffect(() => {
        if(following.current===false) return;
        const {latitude,longitude} = userLocation;
        mapView.current?.animateCamera({
            center:{latitude,longitude}
        });
    }, [userLocation])
    
    

    const centerPosition = async() => {
        const {latitude,longitude} = await getCurrentLocation();

        following.current=true;

        mapView.current?.animateCamera({
            center:{latitude,longitude}
        });
    }


    if(!hasLocation){
        return <LoadingScreen/>
    }

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={(el)=>mapView.current = el!}
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition!.latitude,
          longitude: initialPosition!.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={()=>following.current=false}
      >

          {
              showPolyLine && (
                <Polyline
                coordinates={routeLines}
                strokeColor='red'
                strokeWidth={3}
                />
              )
        
          }
          
        {/* <Marker
            image={require('../assets/custom-marker.png')}
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title='Esto es un titulo'
            description='Esta es la descripcion del marcador'
        /> */}
      </MapView>

        <Fab iconName='compass-outline' onPress={centerPosition} 
            style={{
                position:'absolute',
                bottom:20,
                right:20
            }}
        />

        <Fab iconName='brush-outline' onPress={()=> setshowPolyLine(value=> !value)} 
                style={{
                position:'absolute',
                bottom:90,
                right:20
            }}
                    />

    </View>
  );
};
