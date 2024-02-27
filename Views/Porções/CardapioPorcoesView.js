import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CardapioPorcoesView() {
    const porcoesData = [
        { id: 1, nome: 'Porção de Batata Frita', descricao: 'Porção de batata frita crocante', imagem: require('../../assets/batata-frita.jpg'), price: 15 },
        { id: 2, nome: 'Porção de Frango a Passarinho', descricao: 'Porção de frango frito temperado', imagem: require('../../assets/frango-passarinho.jpg'), price: 25 },
        { id: 3, nome: 'Porção de Calabresa', descricao: 'Porção de calabresa acebolada', imagem: require('../../assets/calabresa.jpg'), price: 18 },
        // Adicione mais porções conforme necessário
    ];

    const [quantidades, setQuantidades] = useState({});

    const handleDecrement = (id) => {
        setQuantidades(prevQuantidades => ({
            ...prevQuantidades,
            [id]: (prevQuantidades[id] || 0) - 1
        }));
    };

    const handleIncrement = (id) => {
        setQuantidades(prevQuantidades => ({
            ...prevQuantidades,
            [id]: (prevQuantidades[id] || 0) + 1
        }));
    };

    return (
        <View style={styles.porcoesContainer}>
            {porcoesData.map((porcao) => (
                <View key={porcao.id} style={styles.porcaoContainer}>
                    <View style={styles.porcaoInfo}>
                        <Text style={styles.porcaoNome}>{porcao.nome}</Text>
                        <Text style={styles.porcaoDescricao}>{porcao.descricao}</Text>
                        <View style={styles.controlsContainer}>
                            <TouchableOpacity onPress={() => handleDecrement(porcao.id)} style={styles.controlButton}>
                                <Text style={styles.controlButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantidades[porcao.id] || 0}</Text>
                            <TouchableOpacity onPress={() => handleIncrement(porcao.id)} style={styles.controlButton}>
                                <Text style={styles.controlButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image source={porcao.imagem} style={styles.porcaoImagem} />
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>R$ {porcao.price.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    porcoesContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        gap: 12,
    },
    porcaoContainer: {
        backgroundColor: '#FFCEAB',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    porcaoImagem: {
        width: 240,
        height: 240,
        borderRadius: 10,
    },
    porcaoNome: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    porcaoDescricao: {
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
    porcaoInfo: {
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
    }
});
