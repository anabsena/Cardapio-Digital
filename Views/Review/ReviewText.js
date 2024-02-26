import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const ReviewTextInput = ({ placeholder, onChangeText }) => {
    const [text, setText] = useState('');

    const handleChangeText = (value) => {
        setText(value);
        onChangeText(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                value={text}
                multiline
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    input: {
        minHeight: 100,
        width: 350,
        height: 150,
        textAlign: 'start',
        fontSize: 20,
        padding: 5,
    },
});

export default ReviewTextInput;
