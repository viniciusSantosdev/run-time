import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

import CountDown from 'react-native-countdown-component';

import ReactNativeAN from 'react-native-alarm-notification';

export default function App() {

  const [number, setNumber] = useState(0);

  function handleAdd() {

    if (number == 0) {
      alert("Tempo zerado!");
    } else {
      setNumber(number - 1)
        , 1000; if(number != 0){
          alert('Contador em andamento!')
        }
    }

  }

  return (
    <View style={styles.container}>

      <CountDown
        until={number}
        onFinish={() => alert('Acabou o tempo!')}
        size={20}
      />

      <TextInput style={styles.textInput}
        multiline={true}
        placeholder="Type the seconds"
        placeholderTextColor="#000"
        keyboardType='numeric'
        onChangeText={(value) => setNumber(value)}
        defaultValue={number}>
      </TextInput>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#FAB913',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  textInput: {
    marginTop: 15,
    backgroundColor: '#FAB913',
    width: 200,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
  },
  textInputText: {
    color: '#000'
  }
});
