import React from 'react'
import { Switch, Platform } from 'react-native';
import { useState } from 'react';

interface Props{
    isOn:boolean;
    onChange: (value:boolean)=>void;
}

export const CustomSwitch = ({isOn,onChange}:Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };
    

  return (
    <Switch
    trackColor={{ false: "gray", true: "purple" }}
    thumbColor={(Platform.OS==='android')?'red':''}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
/>
  )
}
