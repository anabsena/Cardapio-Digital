import React from 'react';
import { View, Text } from 'react-native';
import ResumoPedidoView from './ResumoPedidoView';
import HeaderPedido from '../../Components/HeaderPedido';

export default function ResumoPedido() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderPedido />
      <View style={{ flexDirection: 'row', height: '100%' }}>
        <ResumoPedidoView />
      </View>

    </View>
  );
}
