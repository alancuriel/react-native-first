import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [...currentGoals, {key: Math.random().toString(),
      value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  const closeGoalInputHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onClose={closeGoalInputHandler} />
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
