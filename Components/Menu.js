import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomMenu() {
  const [selectedItem, setSelectedItem] = useState('Lanches');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Adicione aqui a lógica para navegar para outras telas com base no item selecionado
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.item, selectedItem === 'Lanches' && styles.selectedItem]}
          onPress={() => handleItemClick('Lanches')}
        >
          <Text style={styles.itemText}>Lanches</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, selectedItem === 'Porções' && styles.selectedItem]}
          onPress={() => handleItemClick('Porções')}
        >
          <Text style={styles.itemText}>Porções</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, selectedItem === 'Combos' && styles.selectedItem]}
          onPress={() => handleItemClick('Combos')}
        >
          <Text style={styles.itemText}>Combos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.item, selectedItem === 'Bebidas' && styles.selectedItem]}
          onPress={() => handleItemClick('Bebidas')}
        >
          <Text style={styles.itemText}>Bebidas</Text>
        </TouchableOpacity>
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
    justifyContent:'space-evenly'
  },
  item: {
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize:30,
  },
  selectedItem: {
    textDecorationLine: 'underline',
  },
});
