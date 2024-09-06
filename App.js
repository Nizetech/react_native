import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyle.text}>Welcome to React Native</Text>
      <Text style={styles.dummyText}>
        Fortune building native application now This is my new React application
      </Text>
      <Button
        color="green"
        title="Click Me"
        style={btnStyle.btn}
        onPress={() => alert("Button Clicked")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 40,
    borderWidth: 2,
    borderColor: "red",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
    color: "red",
  },
});

const textStyle = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 30,
  },
});

const btnStyle = StyleSheet.create({
  btn: {
    color: "red",
    borderRadius: 10,
  },
});
