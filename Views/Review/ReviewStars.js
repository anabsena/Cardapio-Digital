import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const StarRating = ({ rating, onRate }) => {
    const [selectedStars, setSelectedStars] = useState(rating);

    const handleStarPress = (index) => {
        setSelectedStars(index + 1);
        onRate(index + 1);
    };

    return (
        <View style={styles.container}>
            {[1, 2, 3, 4, 5].map((index) => (
                <TouchableOpacity key={index} onPress={() => handleStarPress(index)} style={styles.star}>
                    <AntDesign name={index < selectedStars ? 'star' : 'staro'} size={30} color="#FFD700" />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    star: {
        marginHorizontal: 2,
    },
});

export default StarRating;
