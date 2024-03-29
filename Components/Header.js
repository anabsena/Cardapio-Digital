import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons"; // Certifique-se de importar o ícone Feather

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.title}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 30 }}>
        <Feather
          name="arrow-left"
          size={50} 
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>Cardápio</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('ResumoPedido')}
      >
        <Text style={styles.botaoText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    backgroundColor: '#B82227',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    height: '8%',
  },
  titleText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 35,
    marginLeft: '40%',
    textAlign: 'center',
  },
  botao: {
    position: 'absolute',
    right: 40,
    top: 20,
  },
  botaoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10,
    fontSize: 20,
  }
});
