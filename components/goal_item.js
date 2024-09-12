import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  goalText: {
    color: "green",
  },
});
