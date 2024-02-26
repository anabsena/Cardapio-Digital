import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';

export default function ResumoPedido() {
  return (
    <View style={{ flex: 1 }}>
        <Header/>
        <View style={{  flexDirection: 'row', height: '100%'}}>    
        <ResumoPedido/>
        </View>
       
    </View>
  );
}
