import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { products } from "../data/products"
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductDetail = ({ navigation }) => {
  
  const initialProd = products [1];
  
  return (
    <SafeAreaView>
      <Header title= "Detalle" /> 
      <Pressable onPress={() => navigation.goBack()}>
        <Text>ATRAS</Text>
      </Pressable>
      <View style={styles.containerImage}>
        <Image 
          style={styles.image}
          source={{uri: initialProd.images[2],}}
          />
          <Text style={styles.title}> Titulo: {initialProd.title}</Text>
          <Text style={styles.description}> 
          {" "}
          Descripcion: {initialProd.description}{""}
          </Text>
          <Text> Rating: {initialProd.rating}</Text>
          <Text> Precio: {initialProd.price}</Text>
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