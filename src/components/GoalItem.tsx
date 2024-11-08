import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function GoalItem(props: any) {
  return (
    <View style={styles.listCourse} key={props.id}>
      <Pressable
        android_ripple={{color: '#ddd'}}
        onPress={() => props.onDeleteItem(props.id)}
        style={({pressed}) => pressed && styles.pressedItem} // Sử dụng cho ios
      >
        <Text style={styles.goalText}>
          {/* {props.id} */}
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalText: {
    padding: 8,
    color: '#ddd',
  },
  pressedItem: {
    opacity: 0.5,
  },
  listCourse: {
    display: 'flex',
    // paddingLeft: 20,
    padding: 8,
    flexDirection: 'column',
    backgroundColor: '#5e0acc',
    borderRadius: '5px',
    margin: 10,
  },
});
