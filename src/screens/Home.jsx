import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import UserContext from "../userContext";
import { auth } from "./Form";
import { styles } from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Aca van las pelis</Text>
    </View>
  );
};

export default Home;
