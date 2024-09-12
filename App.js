import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/goal_item";
import GoalInput from "./components/goal_input";

export default function App() {
  // This is a state variable that will store the list of goals as an array
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
    console.log("deleteGoalHandler");
  }
  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={true}
          scrollsToTop={true}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "flex-start",
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: "#f2f2f2",
    padding: 10,
    width: "100%",
    alignItems: "start",
    justifyContent: "flex-start",
  },
});


