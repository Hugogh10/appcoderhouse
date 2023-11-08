import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../theme/colors";
import { firebase_auth } from "../firebase/firebase_auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIdToken, setUser } from "../redux/slice/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );
      AsyncStorage.setItem(
        "savedSession",
        JSON.stringify({
          email: response.user.email,
          idToken: response._tokenResponse.idToken,
        })
      );
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
      // console.log(response);
    } catch (e) {
      console.log("Error en Login", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconLogo}>
        <AntDesign name="aliwangwang-o1" size={100} color="white" />
        <Text style={styles.titleIcon}>CODERAPP</Text>
      </View>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("register")}>
        <Text style={styles.registroText}>No tienes cuenta? Registrate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lighto,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 20,
    fontFamily: "Kanit",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: colors.lighto, 
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    color: colors.lightp, 
  },
  button: {
    width: "30%",
    height: 40,
    backgroundColor: colors.mediumr, 
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: colors.white, 
    fontSize: 16,
    fontWeight: "bold",
  },
  registroText: {
    color: colors.white, 
    marginTop: 10,
  },

  titleIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.white, 
    marginBottom: 20,
    fontFamily: "Ubuntu",
  },
  iconLogo: {
    padding: 20,
  },
});

export default Login;
