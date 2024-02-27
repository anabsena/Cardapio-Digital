import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CardapioBebidasView() {
    const bebidasData = [
        { id: 1, nome: 'Refrigerante', preco: 5 },
        { id: 2, nome: 'Suco Natural', preco: 7 },
        { id: 3, nome: 'Água Mineral', preco: 3 },
        { id: 4, nome: 'Cerveja', preco: 8 },
        // Adicione mais bebidas conforme necessário
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
        <View style={styles.bebidasContainer}>
            {bebidasData.map((bebida) => (
                <View key={bebida.id} style={styles.bebidaContainer}>
                    <Text style={styles.bebidaNome}>{bebida.nome}</Text>
                    <Text style={styles.bebidaPreco}>Preço: R$ {bebida.preco.toFixed(2)}</Text>
                    <View style={styles.controlsContainer}>
                        <TouchableOpacity onPress={() => handleDecrement(bebida.id)} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantidades[bebida.id] || 0}</Text>
                        <TouchableOpacity onPress={() => handleIncrement(bebida.id)} style={styles.controlButton}>
                            <Text style={styles.controlButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    bebidasContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        gap: 12,
    },
    bebidaContainer: {
        backgroundColor: '#FFCEAB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    bebidaNome: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlButton: {
        backgroundColor: '#8BC34A',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    controlButtonText: {
        fontSize: 25,
        color: 'white',
    },
    quantity: {
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    bebidaPreco: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
