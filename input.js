import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Input extends Component {

  state = {
    myTextInput: '',
    users: ['Saruj', 'Dipa', 'Riya'],
  }

  anAddUser = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        users: [...prevState.users, prevState.myTextInput],


      }
    })
  }

  //ei function ta only input newar jonno
  onChangeInput = (event) => {

    this.setState({
      myTextInput: event,
    })

  }

  render() {
    return (
      <View style={styles.inputWrapper}>
        {
          this.state.users.map(item => (
            <Text style={styles.users} key={item}>{item}</Text>
          ))
        }
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
        // multiline={true}
        // maxLength={100}
        // editable={true}
        // autoCapitalize={'words'}
        />

        <Button
          title="Add user Name"
          color='green'
          onPress={this.anAddUser}

        />

      </View>

    )
  }

}
const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',

  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    marginTop: 5,
    padding: 10,
    fontSize: 20
  },
  users: {
    padding: 10,
    color: 'red',
    backgroundColor: 'yellow',
    margin: 5,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
  }
})

export default Input;
