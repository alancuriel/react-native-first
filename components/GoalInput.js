import React, {useState} from 'react'
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = enteredString => {
        setEnteredGoal(enteredString);
      };
    
    const addGoalHanlder = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    const closeInputHandler = () => {
      props.onClose();
      setEnteredGoal('');
    };

    return (
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.addGoalArea}>
          <TextInput
            placeholder="What is your Goal?"
            style={styles.goalInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            placeholderTextColor="gray"
          />
          <View style={styles.buttonArea}>
            <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onClose}/>
            </View>
            <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHanlder} />
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    addGoalArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      goalInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        color: "black",
      },
      buttonArea: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
      },
      button: {
        width: "40%"
      }
});

export default GoalInput;