import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from './components/GoalItem'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInputHandler = enteredString => {
    setEnteredGoal(enteredString);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, {key: Math.random().toString(),
      value: enteredGoal}]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoalArea}>
        <TextInput
          placeholder="What is your Goal?"
          style={styles.goalInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem title={itemData.item.value}/>}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addGoalArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    padding: 50
  },
  goalInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }
});
