
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
    }
});
