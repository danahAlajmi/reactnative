import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./components/Home";
import AnimalList from "./components/AnimalList";
export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      {/* <Home /> */}
      <AnimalList />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
