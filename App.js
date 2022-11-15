import Home from "./src/screens/Home";
import Form from "./src/screens/Form";
import { useContext, useEffect, useState } from "react";
import UserContext from "./src/userContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPassword from "./src/screens/ForgotPassword";

const Stack = createNativeStackNavigator();
export default function App() {
  const [user, setUser] = useState({ email: "" });

  const getUserFromAsyncStorage = async () => {
    try {
      const userEmail = await AsyncStorage.getItem("email");
      return userEmail !== null
        ? setUser((prev) => ({ ...prev, email: userEmail }))
        : null;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const savedUser = getUserFromAsyncStorage();
    console.log(savedUser);
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "gray",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {user?.email ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: `Bienvenido ${user.name}` }}
            />
          ) : (
            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: "Native Pelis" }}
            />
          )}
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: "Olvidaste tu contrasena" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
