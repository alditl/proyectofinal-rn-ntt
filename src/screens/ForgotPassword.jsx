import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { forgotValidationSchema } from "../validation/validationSchema";
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";
import { styles } from "../styles/styles";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Form";

const ForgotPassword = () => {
  const navigation = useNavigation();
  function handleReset(values) {
    sendPasswordResetEmail(auth, values.email)
      .then(() => Alert.alert(`Enviamos un mensaje a ${values.email}`))
      .catch((err) => console.log(err));
  }

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={forgotValidationSchema}
      onSubmit={(values) => handleReset(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        isSubmitting,
      }) => (
        <SafeAreaView style={styles.container}>
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu mail"
            placeholderTextColor={"darkslategray"}
            onChangeText={handleChange("email")}
            name="email"
            value={values.email}
          />
          <TouchableHighlight onPress={handleSubmit}>
            <Text style={styles.button}>Enviar</Text>
          </TouchableHighlight>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default ForgotPassword;
