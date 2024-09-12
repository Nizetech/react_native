import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
function GoalInput(props) {
  // This is a state variable that will store the entered goal as a string
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your Course Goals"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    flex: 1,
    borderColor: "#cccccc",
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
});
