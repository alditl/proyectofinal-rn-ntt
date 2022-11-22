import Home from "./src/screens/Home";
import Form from "./src/screens/Form";
import Favoritos from "./src/screens/Favoritos";
import { useContext, useEffect, useState } from "react";
import UserContext from "./src/userContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPassword from "./src/screens/ForgotPassword";
import { AntDesign, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOut from "./src/screens/LogOut";
import MovieDetail from "./src/screens/MovieDetail";

const Tab = createBottomTabNavigator();

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
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "gray",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            tabBarActiveTintColor: "blue",
          }}
        >
          {user?.email ? (
            <>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  title: "Home",
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={28} color={color} />
                  ),
                  headerShown: false,
                }}
              />

              <Tab.Screen
                name="LogOut"
                component={LogOut}
                options={{
                  title: "Sign Out",
                  tabBarIcon: ({ color, size }) => (
                    <SimpleLineIcons name="logout" size={24} color={color} />
                  ),
                }}
              />
              <Stack.Screen
                name="movieDetail"
                component={MovieDetail}
                options={{ headerShown: false }}
              />

              <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                  title: "Fav",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                      name="favorite-border"
                      size={28}
                      color={color}
                    />
                  ),
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Form"
                component={Form}
                options={{ title: "Native Pelis" }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ title: "Olvidaste tu contrasena" }}
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
