import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResumoPedidoHome() {
    const navigation = useNavigation();

    const [pedidos, setPedidos] = useState([
        '1. UN X-Bacon',
        '2. UN X-Burger',
        '1. UN Batata Frita',
        '1. UN X-Tudo',
        '1. UN X-Salada',
        '1. UN Coca 1 litro',
    ]);
    const [modalVisible, setModalVisible] = useState(true);
    const [pedidoFinalizadoVisible, setPedidoFinalizadoVisible] = useState(false);

    useEffect(() => {
        setModalVisible(true);
    }, []);

    const fecharModal = () => {
        setModalVisible(false);
        setPedidoFinalizadoVisible(true);
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                style={styles.modalContainer}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Resumo do Pedido</Text>
                        <Text>==========================================</Text>
                        {pedidos.map((pedido, index) => (
                            <Text key={index} style={styles.pedidoText}>{pedido}</Text>
                        ))}
                        <Text>==========================================</Text>
                        <Text style={styles.totalText}>Total: R$ $$$</Text>
                        <View style={styles.containerButtons}>

                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Cardapio');
                                setModalVisible(false);
                            }}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={fecharModal}>
                                <Text style={styles.buttonText}>Finalizar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={pedidoFinalizadoVisible}
                onRequestClose={() => {
                    setPedidoFinalizadoVisible(false);
                }}
                style={styles.modalContainer}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{fontSize: 48, fontWeight: 'bold'}}>Pedido Finalizado</Text>
                        <Text style={{fontSize: 30, marginTop: 100}}>Seu pedido foi enviado à cozinha!</Text>
                        <TouchableOpacity style={styles.buttonTextFim} 
                        onPress={() => {
                            navigation.navigate('Home');
                            setModalVisible(false);
                        }}> Fechar</TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF0E5',
        padding: 20,
        width: '50vh',
        minHeight: '50%',
        maxHeight: '70%',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pedidoText: {
        fontSize: 28,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        maxHeight: 10,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 20,
        justifyContent: 'space-between',
        margin: 10,
        color: '#fff',
        backgroundColor: '#B82227',
        padding: 10,
        width: '20vh',
        height: 50,
        borderRadius: 5,
        textAlign: 'center',
    },
    totalText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
    buttonTextFim:{
        marginTop: 150,
        fontSize: 28,
        color: '#fff',
        backgroundColor: '#B82227',
        padding: 10,
        width: '20vh',
        height: 50,
        borderRadius: 5,
        textAlign: 'center',
    }

});
