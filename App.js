import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from './input'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Input />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default App;
