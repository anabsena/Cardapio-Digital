import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardapioLanchesView() {
  const adicionaisData = [
    { nome: 'Bacon', preco: 2.50 },
    { nome: 'Queijo', preco: 1.50 },
    { nome: 'Ovo', preco: 1.00 },
  ];
  const lanchesData = [
    { nome: 'X-Burger', descricao: 'Hamburguer, queijo, alface, tomate', imagem: require('../../assets/x-burger.jpg') },
    { nome: 'X-Salada', descricao: 'Hamburguer, queijo, alface, tomate', imagem: require('../../assets/x-salada.jpg') },
    { nome: 'X-Tudo', descricao: 'Hamburguer, queijo, alface, tomate, bacon, ovo', imagem: require('../../assets/x-tudo.jpg') },
  ];

  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([]);
  const [quantidadeLanches, setQuantidadeLanches] = useState(0);

  const handleSelecionarAdicional = (index) => {
    const adicionaisCopy = [...adicionaisSelecionados];
    if (adicionaisCopy.includes(index)) {
      const indexToRemove = adicionaisCopy.indexOf(index);
      adicionaisCopy.splice(indexToRemove, 1);
    } else {
      adicionaisCopy.push(index);
    }
    setAdicionaisSelecionados(adicionaisCopy);
  };
  const handleIncrement = () => {
    setQuantidadeLanches(quantidadeLanches + 1);
  };

  const handleDecrement = () => {
    if (quantidadeLanches > 0) {
      setQuantidadeLanches(quantidadeLanches - 1);
    }
  };

  return (
    <View style={styles.containerTotal}>
      <View style={styles.screen}>
        <Image source={require('../../assets/logoTipo.jpg')} style={{ width: '100%', height: 70 }} />
        <View style={styles.container}>
          <Text style={styles.titulo}>Adicionais</Text>
          {adicionaisData.map((item, index) => (
            <View key={index} style={styles.adicionalContainer}>
              <View>
                <Text style={styles.adicionalNome}>{item.nome}</Text>
                <Text style={styles.adicionalPreco}>R$ {item.preco.toFixed(2)}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleSelecionarAdicional(index)}
                style={[
                  styles.checkbox,
                  { backgroundColor: adicionaisSelecionados.includes(index) ? '#8BC34A' : '#E0E0E0' }
                ]}
              >
                {adicionaisSelecionados.includes(index) && <View style={styles.checkboxInner} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.lanchesContainer}>
        {lanchesData.map((lanche, index) => (
          <View key={index} style={styles.lancheContainer}>
            
            <View style={styles.lancheInfo}>
              <Text style={styles.lancheNome}>{lanche.nome}</Text>
              <Text style={styles.lancheDescricao}>{lanche.descricao}</Text>
              <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={handleDecrement} style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantidadeLanches}</Text>
                <TouchableOpacity onPress={handleIncrement} style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image source={lanche.imagem} style={styles.lancheImagem} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTotal: {
    flex: 1,
    flexDirection: 'row',
  },
  screen: {
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
  },
  adicionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 200
  },
  adicionalNome: {
    color: 'black',
    fontSize: 28,
  },
  adicionalPreco: {
    color: 'black',
    fontSize: 28,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#4CAF50',
  },
  lancheContainer: {
    backgroundColor: '#FFCEAB',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  lanchesContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    gap: 12,
  },
  lancheImagem: {
    width: 200,
    height: 200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  lancheNome: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  lancheDescricao: {
    fontSize: 25,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 400,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B82227',
    width: 200,
    height: 50,
  },
  controlButton: {
    backgroundColor: '#8BC34A',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  controlButtonText: {
    fontSize: 50,
    color: 'white',
  },
  quantity: {
    fontSize: 30,
    backgroundColor: 'white',
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
},
  lancheInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  }
});
