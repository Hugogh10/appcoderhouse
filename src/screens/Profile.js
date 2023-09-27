import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const Profile = () => {
  return (
    <View>
      <Header title="Mi Perfil" />
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://img.freepik.com/psd-gratis/icono-3d-aplicacion-redes-sociales_23-2150049569.jpg?w=740&t=st=1695853816~exp=1695854416~hmac=1b5f26b7df7b5e51e75f339731d85f78a029776b2681f086cf033ed2100b53e6hhttps://img.freepik.com/psd-gratis/icono-3d-aplicacion-redes-sociales_23-2150049569.jpg?w=740&t=st=1695853816~exp=1695854416~hmac=1b5f26b7df7b5e51e75f339731d85f78a029776b2681f086cf033ed2100b53e6",
          }}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir camara..")}
            >
              <Entypo name="camera" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Cámara</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir galería de fotos..")}
            >
              <FontAwesome name="photo" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Galería de fotos</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir mapa..")}
            >
              <Feather name="map" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Mapa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  containerButton: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
    borderColor: colors.lightp,
  },
  textButton: {
    marginLeft: 15,
    fontFamily: "Ubuntu",
    fontSize: 20,
  },
});

export default Profile;