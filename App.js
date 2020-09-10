import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import CountDown from 'react-native-countdown-component';

export default function App() {

  const [number, setNumber] = useState()

//   const timer = props => {
//   const [seg, setSeg] = useState(0);

//   setInterval(() => {
//     if (seg == 0) alert("Tempo Acabou");
//     if (seg > 0) setSeg(seg - 1);
//   }, 1000);

//   return (
//     <TextInput
//       value={seg.toString()}
//       onChangeText={text => setSeg(Number.parteInt(text))}
//       keyboardType='numeric'
//     />
//   )
// }

function handleAdd(){
  
  var numberStr = number.toString();

  if(number == 0){
    alert("time 0");
  } else{
    return(
      <CountDown
      until={number}
      onFinish={() => alert(number)}
      onPress={() => alert('hello')}
      size={20}
    />
    )
  }


}

return (
  <View style={styles.container}>

    <CountDown
      until={number}
      onFinish={() => alert()}
      onPress={() => alert('hello')}
      size={20}
    />

    <TextInput style={styles.textInput}
      
      placeholder="Type the seconds"
      placeholderTextColor="#000"
      
      onChangeText={(value) => setNumber(value)}>
    </TextInput>

    <TouchableOpacity style={styles.button} onPress={handleAdd}>
      <Text style={styles.buttonText}>Press me</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Press me2</Text>
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
