
import { StyleSheet, Text, View } from "react-native"

export default function HeaderPedido() {

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
       
        position: 'relative'
    },
    titleText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
    }
});
