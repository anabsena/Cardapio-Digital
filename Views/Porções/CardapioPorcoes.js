import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';
import CustomMenu from '../../Components/Menu';
import CardapioPorcoesView from './CardapioPorcoesView';

export default function CardapioPorcoes() {
  return (
    <View style={{ flex: 1 }}>
        <Header/>
        <View style={{  flexDirection: 'row', height: '100%'}}>
<CustomMenu/>        
      <CardapioPorcoesView/>
        </View>
       
    </View>
  );
}
