import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreem'
import { DimencionesScreen } from './src/screens/DimencionesScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import { PositionScreen } from './src/screens/PositionScreen'
import { ContadorScreen } from './src/screens/ContadorScreen'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { TareaScreen } from './src/screens/TareaScreen'

export const App = () => {
  return (
      // verifica si el dispositivo tiene notch , para que no choquen los componentes con el notch
      <SafeAreaView style={{flex:1}}>  
          {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
          {/* <DimencionesScreen></DimencionesScreen> */}
          {/* <PositionScreen></PositionScreen> */}
          {/* <FlexScreen></FlexScreen> */}
          <TareaScreen></TareaScreen>
      </SafeAreaView>
      // <HolaMundoScreen></HolaMundoScreen>
      // <ContadorScreen></ContadorScreen>
    )
}
