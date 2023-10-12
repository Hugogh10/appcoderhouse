import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

const ProductDetail = ({ navigation, route }) => {

  const productSelected = useSelector(
    (state) => state.homeSlice.productSelected
  );
  
  return (
    <SafeAreaView>
      <Header title= "Detalle"  navigation={navigation}/> 
      <Pressable onPress={() => navigation.goBack()}>

      <Ionicons name="caret-back-circle-outline" size={30} color="black" />

      </Pressable>
      <View style={styles.containerImage}>
        <Image 
          style={styles.image}
          source={{uri: productSelected.images[2],}}
          />
          <Text style={styles.title}> Titulo: {productSelected.title}</Text>
          <Text style={styles.description}> 
          {" "}
          Descripcion: {productSelected.description}{""}
          </Text>
          <Text> Rating: {productSelected.rating}</Text>
          <Text> Precio: {productSelected.price}</Text>
          </View>
          <Button 
          title="Agregar al carrito"
          onProgress={() => console.log("hola")}
          />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  containerImage: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Monserrat",
  },
  description:{
    fontSize: 20,
    marginVertical: 15,
  }

})

export default ProductDetail