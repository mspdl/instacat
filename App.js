import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {

  const [like, setLike] = useState(0);

  const incrementLike = () => {
    setLike(like + 1);
  }

  const handleLikeButton = () => {
    incrementLike();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likes: {like}</Text>
      <TouchableOpacity onPress={handleLikeButton}>
        <Text>Like</Text>
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
})

export default App;