import React, { useState } from 'react';
import { StatusBar, Modal, View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ReviewTextInput from './Review/ReviewText';

const getPedidos = async () => {
  try {
    // Obter os pedidos armazenados
    const pedidosArmazenados = await AsyncStorage.getItem('pedidos');

    // Se houver pedidos armazenados, converta-os de volta para um array
    if (pedidosArmazenados !== null) {
      const pedidosArray = JSON.parse(pedidosArmazenados);
      console.log('Pedidos armazenados:', pedidosArray);
    } else {
      console.log('Não há pedidos armazenados ainda.');
    }
  } catch (error) {
    console.error('Erro ao recuperar pedidos:', error);
  }
};

// Chame a função para recuperar os pedidos

export default function Home() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [savedReview, setSavedReview] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSaveReview = () => {
    // Salvar os dados do review em uma variável
    const reviewData = {
      rating: rating,
      reviewText: reviewText,
    };

    // Definir os dados salvos
    setSavedReview(reviewData);

    // Limpar os estados do modal
    setReviewText('');
    setRating(0);

    // Fechar o modal
    closeModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Empresa</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Config')} style={styles.settingsButton}>
          <AntDesign name="setting" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.containerBody}>
          <Image source={require('../assets/logoTipo.jpg')} style={styles.logo} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cardapio')}>
            <AntDesign name="menufold" size={30} color="white" />
            <Text style={styles.buttonText}>Cardápio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <AntDesign name="star" size={30} color="white" />
            <Text style={styles.buttonText}>Avalie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResumoPedidoHome')}>
            <AntDesign name="shoppingcart" size={30} color="white" />
            <Text style={styles.buttonText}>Ver Pedido</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBody}>
          <Image source={require('../assets/bg-table.jpg')} style={styles.bgTable} />
          <View style={styles.containerTable}>
            <Text style={styles.overlayText}>Mesa</Text>
            <Text style={styles.overlayNumber}>01</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Avalie este item</Text>
              <ReviewTextInput
                placeholder="Digite seu comentário..."
                value={reviewText}
                onChangeText={(text) => setReviewText(text)}
              />
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleStarPress(index)}
                    style={styles.star}
                  >
                    <AntDesign
                      name={index <= rating ? 'star' : 'staro'}
                      size={60}
                      color={index <= rating ? '#FFD700' : '#ddd'}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity style={styles.saveReviewBt} onPress={handleSaveReview}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#680101',
  },
  title: {
    backgroundColor: '#B82227',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    position: 'absolute',
    top: 1
  },
  bgTable: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  containerBody: {
    position: 'relative',
    width: '50%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#B82227',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 100,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 30
  },
  containerTable: {
    backgroundColor: 'white',
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    elevation: 10,
  },
  overlayText: {
    color: 'black',
    fontSize: 70,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  overlayNumber: {
    color: 'black',
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    gap: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    marginRight: 5,
  },
  saveReviewBt: {
    backgroundColor: '#B82227',
    padding: 10,
    borderRadius: 5,
  },
  settingsButton: {
    position: 'absolute',
    right: 10,
  },
});
