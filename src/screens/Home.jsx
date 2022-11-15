import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import UserContext from "../userContext";
import { getAuth } from "firebase/auth";
import { styles } from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const auth = getAuth();
const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser({ email: "" });
        deleteUserFromAsyncStorage("email");
      })
      .catch((err) => console.log(err));
  };
  const deleteUserFromAsyncStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Native Pelis{user.name}</Text>
      <Pressable
        style={[styles.button, styles.bgRebeccaPurple]}
        onPress={logout}
      >
        <Text style={[styles.buttonText, styles.textLight]}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
