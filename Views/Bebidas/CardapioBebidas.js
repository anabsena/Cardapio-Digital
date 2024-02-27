import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';
import CustomMenu from '../../Components/Menu';
import CardapioBebidasView from './CardapioBebidasView';

export default function CardapioBebidas() {
  return (
    <View style={{ flex: 1 }}>
        <Header/>
        <View style={{  flexDirection: 'row', height: '100%'}}>
  <CustomMenu/>        
      <CardapioBebidasView/>
        </View>
       
    </View>
  );
}
