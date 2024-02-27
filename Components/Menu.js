import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomMenu() {
  const [selectedItem, setSelectedItem] = useState('Lanches');
  const navigation = useNavigation();

  useEffect(() => {
    // Forçar a renderização quando o selectedItem mudar para que o indicador seja mostrado imediatamente
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Navegação para outras telas com base no item selecionado
    switch (item) {
      case 'Lanches':
        navigation.navigate('Cardapio');
        break;
      case 'Porções':
        navigation.navigate('CardapioPorcoes');
        break;
      case 'Combos':
        navigation.navigate('CardapioCombos');
        break;
      case 'Bebidas':
        navigation.navigate('CardapioBebidas');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {['Lanches', 'Porções', 'Combos', 'Bebidas'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.item, selectedItem === item && styles.selectedItem ]}
            onPress={() => handleItemClick(item)}
          >
            <Text style={styles.itemText}>{item}</Text>
            
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: '100%',
    backgroundColor: '#B82227',
    justifyContent: 'start',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    height: '70%',
    justifyContent: 'space-evenly'
  },
  item: {
    width: '100%',
    alignItems: 'center',
    position: 'relative', // Para permitir o posicionamento absoluto do indicador
  },
  itemText: {
    color: '#fff',
    fontSize: 30,
  },
  selectedItem: {
    marginTop: 10, // Adicionando margem ao item selecionado
    textDecorationLine: 'underline',
  },
});
