import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const {theme:{colors}} = useContext(ThemeContext);
   
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
              <Text style={{...styles.switchtext,color:colors.text}}>Is active</Text>
              <CustomSwitch isOn={isActive} onChange={(value)=>onChange(value,'isActive')}/>
          </View>
          <View style={styles.switchRow}>
              <Text style={{...styles.switchtext,color:colors.text}}>Is Hungry</Text>
              <CustomSwitch isOn={isHungry} onChange={(value)=>onChange(value,'isHungry')}/>
          </View>
          <View style={styles.switchRow}>
              <Text style={{...styles.switchtext,color:colors.text}}>Is Happy</Text>
              <CustomSwitch isOn={isHappy} onChange={(value)=>onChange(value,'isHappy')}/>
          </View>

          <Text style={{...styles.switchtext,color:colors.primary}}>
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
