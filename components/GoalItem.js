import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 7,
        backgroundColor: '#ccc',
        borderColor: 'black'
    }
});

export default GoalItem;