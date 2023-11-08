import { Image, StyleSheet, Text, View, Pressable, ActivityIndicator,ScrollView, Modal } from "react-native";
import React from "react";
import Header from "../components/Header";
import { clearUser } from "../redux/slice/authSlice";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import * as ImagePicker from "expo-image-picker";
import { useState } from 'react';
import { useDispatch } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {

  const dispatch = useDispatch()

  const [sessionLogOutModal, setSessionLogOutModal] = useState(false);

  const defaultImage =
    "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000";

    const openCamera = async () => {
      const permissionsResult = await ImagePicker.requestCameraPermissionsAsync();

      if  (permissionsResult.granted === false) {
        alert("No has dado permiso para acceder a la camara");
        return;
      } else {
        const result = await ImagePicker.launchCameraAsync({
          base64:true,
        });

        console.log(result);

        if (!result.canceled) {
          await putImage({
            image: `data:image/jpeg;base64,${result.assets[0].base64}`,
          });
          refetch();
      }
    }
    };
    const logOut = async () => { 
      await AsyncStorage.removeItem("savedSession")
      dispatch(clearUser())
  }

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={sessionLogOutModal}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setSessionLogOutModal(!sessionLogOutModal);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>¿Estas seguro que deseas cerrar sesion?</Text>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {logOut(); setSessionLogOutModal(!sessionLogOutModal)}}>
                        <Text style={styles.textStyle}>Log Out</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {setSessionLogOutModal(!sessionLogOutModal)}}>
                        <Text style={styles.textStyle}>Regresar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    <View>
      <Header title="MI PERFIL" />
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
              onPress={() => openCamera()}
            >
              <Entypo name="camera" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Abrir Camara</Text>
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
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={()=>setSessionLogOutModal(!sessionLogOutModal)}>
              <AntDesign name="logout" size={24} color="black" />
            </Pressable>
            <Text style={styles.textButton}>Cerrar Sesión</Text>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
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
    borderColor: colors.lighto,
  },
  textButton: {
    marginLeft: 15,
    fontFamily: "Ubuntu",
    fontSize: 20,
  },
  text: {
    alignSelf: 'center',
    margin: 20
},
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10
},
buttonOpen: {
    backgroundColor: '#F194FF',
},
buttonClose: {
    backgroundColor: '#2196F3',
},
textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
},
modalText: {
    marginBottom: 15,
    textAlign: 'center',
},
modalIconContainer:{
    flexDirection: 'row'
},
modalIcon: {
    margin: 25
}
});

export default Profile;