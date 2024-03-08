import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Config() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tableNumber, setTableNumber] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmitTableNumber = () => {
    console.log('Número da mesa:', tableNumber);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>

        <Text style={styles.titleText}>Configurações</Text>
        <TouchableOpacity onPress={openModal} style={styles.settingsButton}>
          <Feather name="settings" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Configurações</Text>
              <TextInput
                style={styles.input}
                placeholder="Número da Mesa"
                keyboardType="numeric"
                value={tableNumber}
                onChangeText={setTableNumber}
              />
              <TouchableOpacity style={styles.saveButton} onPress={handleSubmitTableNumber}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F3F3F1',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  settingsButton: {
    padding: 5,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#680101',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'column',
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: '#B82227',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#777',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
