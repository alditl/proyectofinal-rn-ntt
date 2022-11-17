import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { loginValidationSchema } from "../validation/validationSchema";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { styles } from "../styles/styles";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import UserContext from "../userContext";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const Form = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [initializing, setInitializing] = useState(true);

  //handling user state change
  const userStateChange = (user) => {
    setUser((prev) => (prev = user));
    if (initializing) setInitializing((prev) => (prev = false));
  };

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(userStateChange);
    return subscriber; //unsubscribe on unmount
  }, []);

  const handleRegister = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        setUser((prev) => ({ ...prev, email: values.email }));
        storeUser(values.email);
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        setUser((prev) => ({ ...prev, email: values.email }));
        storeUser(values.email);
      })
      .catch((err) => console.log(err));
  };

  const storeUser = async (user) => {
    try {
      const userEmail = JSON.stringify(user);
      await AsyncStorage.setItem("email", userEmail);
    } catch (err) {
      console.log(err);
    }
  };

  if (initializing) return <ActivityIndicator />;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, values, errors, touched }) => (
        <View style={styles.container}>
          {isNewUser ? (
            <>
              <Text style={styles.title_forms}>Crea tu cuenta </Text>
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su nombre..."
                  placeholderTextColor={"darkslategray"}
                  onChangeText={handleChange("name")}
                  name="name"
                  value={values.name}
                  textAlignVertical="bottom"
                />
                <AntDesign name="user" size={24} color="black" />
              </View>
            </>
          ) : null}
          <>
            {!isNewUser ? (
              <Text style={styles.title_forms}>Iniciar sesion</Text>
            ) : null}

            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                placeholder="Ingrese email..."
                placeholderTextColor={"darkslategray"}
                onChangeText={handleChange("email")}
                name="email"
                value={values.email}
                textAlignVertical="bottom"
              />
              <MaterialIcons name="alternate-email" size={24} />
            </View>

            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <View style={styles.inputWithIcon}>
              <TextInput
                style={styles.input}
                placeholder="Ingrese contraseña..."
                placeholderTextColor={"darkslategray"}
                onChangeText={handleChange("password")}
                name="password"
                value={values.password}
                textAlignVertical="bottom"
                secureTextEntry={isVisible}
              />
              <Pressable onPress={() => setIsVisible(!isVisible)}>
                <Feather name={isVisible ? "eye-off" : "eye"} size={24} />
              </Pressable>
            </View>
            {isNewUser ? (
              <TouchableHighlight
                style={styles.button}
                onPress={() => handleRegister(values)}
              >
                <Text style={styles.button}>Crear cuenta</Text>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight onPress={() => handleLogin(values)}>
                <Text style={styles.button}>Ingresar</Text>
              </TouchableHighlight>
            )}

            <TouchableHighlight onPress={() => setIsNewUser((prev) => !prev)}>
              {isNewUser ? (
                <Text style={styles.button_2}>Ya tengo una cuenta</Text>
              ) : (
                <Text style={styles.button_2}>Quiero crear una cuenta</Text>
              )}
            </TouchableHighlight>
            {!isNewUser ? (
              <TouchableHighlight
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.button_forgotpassword}>
                  Recuperar contrasena
                </Text>
              </TouchableHighlight>
            ) : null}
          </>
        </View>
      )}
    </Formik>
  );
};

export default Form;
