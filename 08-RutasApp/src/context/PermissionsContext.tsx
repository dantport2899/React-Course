import React, { useEffect } from 'react';
import { PermissionStatus, request, PERMISSIONS, check, openSettings } from 'react-native-permissions';
import { createContext,useState } from 'react';
import { Platform, AppState } from 'react-native';

export interface PermissionsState{
    locationStatus:PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus:'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: ()=> void;
    checkLocationPermission: ()=> void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps); //Todo que exporta

export const PermissionsProvider = ({children}:any) => {

    const [permissions, setpermissions] = useState(permissionsInitState);

    useEffect(() => {

        checkLocationPermission();

        AppState.addEventListener('change', state => {

            if(state !== 'active') return;
            
            checkLocationPermission();
        })
    }, [])

    const askLocationPermission  = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios'){
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        }else{
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if(permissionStatus==='blocked'){
            openSettings();
        }

        setpermissions({
            ...permissions,
            locationStatus:permissionStatus,
        })
    }

    const checkLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios'){
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        }else{
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setpermissions({
            ...permissions,
            locationStatus:permissionStatus,
        })
    }


    return(
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            {children}
        </PermissionsContext.Provider>
    )
}