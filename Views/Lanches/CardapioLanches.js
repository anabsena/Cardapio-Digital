import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';
import CustomMenu from '../../Components/Menu';
import CardapioLanchesView from './CardapioLanchesView';

export default function CardapioLanches() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flexDirection: 'row', height: '100%' }}>
        <CustomMenu />
        <CardapioLanchesView />
      </View>

    </View>
  );
}
