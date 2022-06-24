import { View } from "react-native";
import React from "react";
import AnimalItem from "./AnimalItem";
import { observer } from "mobx-react";
import zooStore from "../stores/zooStore";
// import { HStack } from "native-base";

function AnimalList() {
  const animalList = zooStore.animals.map((animal) => (
    <AnimalItem key={animal.id} animal={animal} />
  ));
  console.log(animalList);
  return <View>{animalList}</View>;
}
export default observer(AnimalList);
