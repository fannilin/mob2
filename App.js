import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {  useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(number1 + number2);

  function addTogether() {
      const newResult = number1 + number2;
      setResult(newResult);
      Alert.alert('Alert', 'Tulos: ' + newResult);
  }

  function minusOther() {
    const newResult = number1 - number2;
    setResult(newResult);
    Alert.alert('Alert', 'Tulos: ' + newResult);
  }
  return (
      <View style={styles.container}>
          <TextInput
          styles={styles.input}
              type="number"
              placeholder="0"
              value={number1}
              onChangeText={v => {
                  setNumber1(Number.parseInt(v)); 
              }}
          />
          <TextInput
          styles={styles.input}
              type="number"
              placeholder="0"
              value={number2}
              onChange={e => {
                  setNumber2(Number.parseInt(e.nativeEvent.text)); 
              }}
          />

          <Button onPress={addTogether} title="+" />
          <Button onPress={minusOther} title="-" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:100  , 
    borderColor: 'blue', 
    borderWidth: 1
  }
});
