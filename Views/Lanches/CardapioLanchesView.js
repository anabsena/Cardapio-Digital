import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardapioLanchesView() {
  const lanchesData = [
    { 
      id: 1, 
      nome: 'X-Burger', 
      descricao: 'Hamburguer, queijo, alface, tomate', 
      imagem: require('../../assets/x-burger.jpg'), 
      price: 24, 
      adicionais: [
        { nome: 'Bacon', preco: 2.50 },
        { nome: 'Queijo', preco: 1.50 },
        { nome: 'Ovo', preco: 1.00 },
      ]
    },
    { 
      id: 2, 
      nome: 'X-Salada', 
      descricao: 'Hamburguer, queijo, alface, tomate', 
      imagem: require('../../assets/x-salada.jpg'), 
      price: 20,
      adicionais: [
        { nome: 'Bacon', preco: 2.50 },
        { nome: 'Queijo', preco: 1.50 },
        { nome: 'Ovo', preco: 1.00 },
      ]
    },
    { 
      id: 3, 
      nome: 'X-Tudo', 
      descricao: 'Hamburguer, queijo, alface, tomate, bacon, ovo', 
      imagem: require('../../assets/x-tudo.jpg'), 
      price: 30,
      adicionais: [
        { nome: 'Bacon', preco: 2.50 },
        { nome: 'Queijo', preco: 1.50 },
        { nome: 'Ovo', preco: 1.00 },
      ]
    },
  ];

  const [selectedLancheId, setSelectedLancheId] = useState(null);
  const [quantidades, setQuantidades] = useState({});
  const [adicionaisPorLanche, setAdicionaisPorLanche] = useState({});

  const handleSelecionarLanche = (id) => {
    setSelectedLancheId(id);
  };

  const handleSelecionarAdicional = (index, lancheId) => {
    const adicionaisCopy = { ...adicionaisPorLanche };
    if (!adicionaisCopy[lancheId]) {
      adicionaisCopy[lancheId] = [];
    }

    if (adicionaisCopy[lancheId].includes(index)) {
      const indexToRemove = adicionaisCopy[lancheId].indexOf(index);
      adicionaisCopy[lancheId].splice(indexToRemove, 1);
    } else {
      adicionaisCopy[lancheId].push(index);
    }

    setAdicionaisPorLanche(adicionaisCopy);
  };

  const handleIncrement = (id) => {
    setQuantidades({ ...quantidades, [id]: (quantidades[id] || 0) + 1 });
  };

  const handleDecrement = (id) => {
    if (quantidades[id] > 0) {
      setQuantidades({ ...quantidades, [id]: quantidades[id] - 1 });
    } else {
      setQuantidades({ ...quantidades, [id]: 0 });
    }
  };
  

  return (
    <View style={styles.containerTotal}>
      <View style={styles.screen}>
        <Image source={require('../../assets/logoTipo.jpg')} style={{ width: '100%', height: 70 }} />
        <View style={styles.container}>
          <Text style={styles.titulo}>Adicionais</Text>
          {lanchesData.map((lanche) => (
            <View key={lanche.id}>
              <TouchableOpacity onPress={() => handleSelecionarLanche(lanche.id)}>
                <Text style={styles.lancheTitulo}>{lanche.nome}</Text>
              </TouchableOpacity>
              {lanche.id === selectedLancheId && lanche.adicionais.map((item, index) => (
                <View key={index} style={styles.adicionalContainer}>
                  <View>
                    <Text style={styles.adicionalNome}>{item.nome}</Text>
                    <Text style={styles.adicionalPreco}>R$ {item.preco.toFixed(2)}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleSelecionarAdicional(index, lanche.id)}
                    style={[
                      styles.checkbox,
                      { backgroundColor: adicionaisPorLanche[lanche.id]?.includes(index) ? '#8BC34A' : '#E0E0E0' }
                    ]}
                  >
                    {adicionaisPorLanche[lanche.id]?.includes(index) && <View style={styles.checkboxInner} />}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.lanchesContainer}>
        {lanchesData.map((lanche) => (
          <View key={lanche.id} style={styles.lancheContainer}>
            <View style={styles.lancheInfo}>
              <Text style={styles.lancheNome}>{lanche.nome}</Text>
              <Text style={styles.lancheDescricao}>{lanche.descricao}</Text>
              {adicionaisPorLanche[lanche.id]?.length > 0 && (
                <View style={styles.adicionaisSelecionadosContainer}>
                  <Text style={styles.adicionaisSelecionadosTitulo}>Adicionais:</Text>
                  {adicionaisPorLanche[lanche.id].map((index) => (
                    <Text key={index} style={styles.adicionalSelecionado}>+{lanche.adicionais[index].nome}</Text>
                  ))}
                </View>
              )}
              <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={() => handleDecrement(lanche.id)} style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantidades[lanche.id] || 0}</Text>
                <TouchableOpacity onPress={() => handleIncrement(lanche.id)} style={styles.controlButton}>
                  <Text style={styles.controlButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image source={lanche.imagem} style={styles.lancheImagem} />
              <View style={styles.priceContainer}>
                <Text style={styles.price}>R$ {lanche.price.toFixed(2)}</Text>
              </View>
            </View>
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
    backgroundColor: '#F3F3F1',
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
    backgroundColor: '#FDEAE2',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  lanchesContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    gap: 12,
  },
  lancheImagem: {
    width: 280,
    height: 280,
    borderRadius: 10,
  },
  lancheNome: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  lancheDescricao: {
    fontSize: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 400,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B82227',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 12,  
  },
  controlButton: {
    backgroundColor: '#8BC34A',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 10, 
    height: 50,
    width: 50,
    borderRadius: 5,
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
    textAlign: 'center',
  },
  lancheInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  priceContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#B82227',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  adicionaisSelecionadosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  adicionalSelecionado: {
    backgroundColor: '#8BC34A',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  lancheTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});
