import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Views/Home';
import Cardapio from './Views/Lanches/CardapioLanches';
import ResumoPedido from './Views/ResumoPedido/ResumoPedido';
import ResumoPedidoHome from './Views/ResumoPedido/ResumoPedidoHome';
import CardapioPorcoes from './Views/Porções/CardapioPorcoes';
import CardapioCombos from './Views/Combos/CardapioCombos';
import CardapioBebidas from './Views/Bebidas/CardapioBebidas';
import Config from './Views/Config';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false}}>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Config" component={Config}/>
        <Stack.Screen name="ResumoPedido" component={ResumoPedido} />
        <Stack.Screen name="ResumoPedidoHome" component={ResumoPedidoHome} />
        <Stack.Screen name="CardapioPorcoes" component={CardapioPorcoes} />
        <Stack.Screen name="CardapioCombos" component={CardapioCombos} />
        <Stack.Screen name="CardapioBebidas" component={CardapioBebidas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
