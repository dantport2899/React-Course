import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {
   
    const [state, setstate] = useState({
        isActive:true,
        isHungry:false,
        isHappy:true
    });

    const {isActive,isHungry,isHappy} = state;

    const onChange =(value:boolean,field:keyof typeof state)=>{
        setstate({
            ...state,
            [field]:value
        })
    }

  return (
      <View style={{marginHorizontal:20}}>
          <HeaderTitle title='Switches'/>
          <View style={styles.switchRow}>
              <Text style={styles.switchtext}>Is active</Text>
              <CustomSwitch isOn={isActive} onChange={(value)=>onChange(value,'isActive')}/>
          </View>
          <View style={styles.switchRow}>
              <Text style={styles.switchtext}>Is Hungry</Text>
              <CustomSwitch isOn={isHungry} onChange={(value)=>onChange(value,'isHungry')}/>
          </View>
          <View style={styles.switchRow}>
              <Text style={styles.switchtext}>Is Happy</Text>
              <CustomSwitch isOn={isHappy} onChange={(value)=>onChange(value,'isHappy')}/>
          </View>

          <Text style={styles.switchtext}>
              {JSON.stringify(state,null,5)}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10

    },
    switchtext:{
        fontSize:25
    }
});
