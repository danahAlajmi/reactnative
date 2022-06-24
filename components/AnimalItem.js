import { Text, StyleSheet, Image, View } from "react-native";
import React from "react";
// import zooStore from "../stores/zooStore";
// import { HStack } from "native-base";

export default function AnimalItem({ animal }) {
  return (
    <View
      style={{
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={styles.image} source={{ uri: animal.image_link }} />
      <Text style={styles.title}>{animal.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
