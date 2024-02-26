import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Views/Home';
import Cardapio from './Views/Lanches/CardapioLanches'; 
import ResumoPedido from './Views/ResumoPedido/ResumoPedido';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="ResumoPedido" component={ResumoPedido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
