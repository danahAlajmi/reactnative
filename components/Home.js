import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

export default function index() {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Hello</Text>

      <Button
        onPress={() => alert("Take me to the list of shops")}
        style={styles.button}
        title="Click Me"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: "#fff",
  },

  homeBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  view: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontSize: 38,
    textAlign: "center",
  },
});
