import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState, useRef } from 'react';
import { Location } from '../interfaces/AppInterfaces';

export const useLocation = () => {

    const [hasLocation, sethasLocation] = useState(false);
    const [routeLines, setrouteLines] = useState<Location[]>([])

    const [initialPosition, setinitialPosition] = useState<Location>({
        longitude:0,
        latitude:0,
    });

    const [userLocation, setuserLocation] = useState<Location>({
        longitude:0,
        latitude:0,
    });

    const watchId = useRef<number>();
    const isMounted = useRef(true)

    useEffect(() => {
        isMounted.current = true;
        return()=>{
            isMounted.current = false;
        }
    }, [])
    

    useEffect(() => {

        getCurrentLocation()
            .then( location => {

                if(!isMounted.current)return;

                setinitialPosition(location);
                setuserLocation(location);
                setrouteLines(routes => [...routeLines,location]);
                sethasLocation(true);
            });
    }, []);

    const getCurrentLocation = ():Promise<Location> => {
        return new Promise((resolve,reject)=>{
            Geolocation.getCurrentPosition(
                ({coords})=>{    // OK
                    resolve({
                        latitude:coords.latitude,
                        longitude:coords.longitude
                    });
                },
                (error)=>{    // error
                    reject(error);
                },
                { enableHighAccuracy:true, timeout:20000, maximumAge: 1000 } //Opciones
            );
        })
    }

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({coords})=>{    // OK

                if(!isMounted.current)return;

                const location:Location = {
                    latitude:coords.latitude,
                    longitude:coords.longitude,
                }

                setuserLocation(location);
                setrouteLines(routes =>[...routeLines,location]);
            },
            (error)=>{    // error
                console.log(error);;
            },
            { enableHighAccuracy:true, distanceFilter:10 } //Opciones
        );

    }
  
    const stopFollowUserLocation = () => {
        if(watchId.current)
        Geolocation.clearWatch(watchId.current);
    }

  return {
      hasLocation,
      initialPosition,
      getCurrentLocation,
      followUserLocation,
      stopFollowUserLocation,
      userLocation,
      routeLines,
  }
}
