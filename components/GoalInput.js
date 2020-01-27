import React, {useState} from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = enteredString => {
        setEnteredGoal(enteredString);
      };

    return (
        <View style={styles.addGoalArea}>
        <TextInput
          placeholder="What is your Goal?"
          style={styles.goalInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    );
};

const styles = StyleSheet.create({
    addGoalArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      goalInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10
      }
});

export default GoalInput;