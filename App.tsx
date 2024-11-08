/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  // FlatList,
  StyleSheet,
  View,
} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

type Goal = {
  text: string;
  id: string;
};

function App(): React.JSX.Element {
  const [courseGoal, setCourseGoal] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoal(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    onEndAddGoal();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoal(currentCourseGoals => {
      return currentCourseGoals.filter(item => item.id !== id);
    });
  }

  function onStartAddGoal() {
    setModalIsVisible(true);
  }

  function onEndAddGoal() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.viewContainer}>
      <Button title="Add new goal" color="#5e0acc" onPress={onStartAddGoal} />
      <GoalInput
        onAddGoalHandler={addGoalHandler}
        visibleModal={modalIsVisible}
        onCancel={onEndAddGoal}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={itemData => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
      {/* <View>
        <ScrollView>
          <View style={styles.listCourse}>
            {courseGoal.map((goal, index) => {
              return (
                <View style={styles.listCourse} key={index}>
                  <Text>{goal}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    // flex: 3,
  },
  viewContainer: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
