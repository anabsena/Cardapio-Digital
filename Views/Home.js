import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Empresa</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.containerBody}>
          <Image source={require('../assets/logoTipo.jpg')} style={styles.logo} />
          <TouchableOpacity style={styles.button}>
            <AntDesign name="menufold" size={30} color="white" />
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Cardapio')}>Cardápio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="star" size={30} color="white" />
            <Text style={styles.buttonText}>Avalie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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
  containerBody:{
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
});
