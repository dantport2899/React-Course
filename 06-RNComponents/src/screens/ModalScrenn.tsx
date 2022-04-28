import React from 'react'
import { Button, View, Modal, Text } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/AppTheme'
import { useState } from 'react';

export const ModalScrenn = () => {

    const [isVisible, setisVisible] = useState(false)

  return (
    <View style={styles.globalmargin}>
        <HeaderTitle title='Modal Screen'/>
        <Button
            title='Abrir Modal'
            onPress={()=>setisVisible(true)}
        />
        <Modal
            animationType='fade'
            visible={isVisible}
            transparent={true}
        >
            <View style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,0.5)',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <View style={{
                    backgroundColor:'white',
                    width:200,
                    height:200,
                    justifyContent:'center',
                    alignItems:'center',
                    shadowOffset:{
                        width:0,
                        height:10
                    },
                    shadowOpacity:0.25,
                    elevation:20,
                    borderRadius:5                    
                }}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Modal</Text>
                    <Text style={{fontSize:16,fontWeight:'300',marginBottom:20}}>Cuerpo del Modal</Text>
                    <Button 
                        title='Cerrar' 
                        onPress={()=>setisVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    </View>
    )
}
