import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function HeaderPedido() {
    const navigation = useNavigation();

    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>Resumo do pedido</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#B82227',
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 30,
        position: 'relative'
    },
    titleText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
    },
    botao: {
        position: 'absolute',
        right: 10,
    },
    botaoText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
    }
});
