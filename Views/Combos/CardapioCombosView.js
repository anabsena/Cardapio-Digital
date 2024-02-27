import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CardapioCombosView() {
    const combosData = [
        { id: 1, nome: 'Combo 1', descricao: 'Hamburguer + Batata Frita + Refrigerante', imagem: require('../../assets/combo1.jpg'), price: 30 },
        { id: 2, nome: 'Combo 2', descricao: 'Hamburguer + Onion Rings + Milkshake', imagem: require('../../assets/combo2.jpg'), price: 35 },
        { id: 3, nome: 'Combo 3', descricao: 'Hamburguer Duplo + Batata Frita Grande + Refrigerante Grande', imagem: require('../../assets/combo3.jpg'), price: 40 },
        // Adicione mais combos conforme necessário
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
        <View style={styles.combosContainer}>
            {combosData.map((combo) => (
                <View key={combo.id} style={styles.comboContainer}>
                    <View style={styles.comboInfo}>
                        <Text style={styles.comboNome}>{combo.nome}</Text>
                        <Text style={styles.comboDescricao}>{combo.descricao}</Text>
                        <View style={styles.controlsContainer}>
                            <TouchableOpacity onPress={() => handleDecrement(combo.id)} style={styles.controlButton}>
                                <Text style={styles.controlButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{quantidades[combo.id] || 0}</Text>
                            <TouchableOpacity onPress={() => handleIncrement(combo.id)} style={styles.controlButton}>
                                <Text style={styles.controlButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image source={combo.imagem} style={styles.comboImagem} />
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>R$ {combo.price.toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    combosContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        gap: 12,
    },
    comboContainer: {
        backgroundColor: '#FFCEAB',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    comboImagem: {
        width: 240,
        height: 240,
        borderRadius: 10,
    },
    comboNome: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    comboDescricao: {
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
    comboInfo: {
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
