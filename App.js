import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([]);
  

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [...currentGoals, {key: Math.random().toString(),
      value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/>}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
