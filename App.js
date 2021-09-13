import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(){
  return (
    <View style={styles.container}>
      <Text>Olá mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default App;