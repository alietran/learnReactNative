import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

export default function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoalHandler() {
    props.onAddGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  }

  function goalInputHandler(string: string) {
    setEnteredGoalText(string);
  }

  return (
    <Modal visible={props.visibleModal} animationType="slide">
      <Image
        style={styles.image}
        source={require('./assets/images/target.jpg')}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    marginTop: 40,
  },
});
