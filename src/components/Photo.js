import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Photo = ({file, count}) => {
    const [like, setLike] = useState(count);

    const incrementLike = () => {
        setLike(like + 1);
    }

    const handleLikeButton = () => {
        incrementLike();
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={file} />
            <TouchableOpacity onPress={handleLikeButton}>
                <Text style={styles.text}>{like} likes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        color: '#00f'
    },
    image: {
        height: 250,
        width: 250,
    },
})

export default Photo;