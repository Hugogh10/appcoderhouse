import { View, Text, StyleSheet, Image, Button,SafeAreaView, Pressable,} from 'react-native'
import { colors } from '../theme/colors';
import React from 'react'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addToCartList } from '../redux/slice/cartSlice';



const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const addToCart =(item) => {dispatch(addToCartList(item))}

const { item } = route.params

return (
    <SafeAreaView>
      <Header title= "Detalle"  navigation={navigation}/> 
      <Pressable onPress={() => navigation.goBack()}>

      <Ionicons name="caret-back-circle-outline" size={30} color="black" />

      </Pressable>
      <View style={styles.containerImage}>
        <Image 
          style={styles.image}
          source={{uri: item.images[2],}}
          />
          <Text style={styles.title}> Titulo: {item.title}</Text>
          <Text style={styles.description}> 
          {" "}
          Descripcion: {item.description}{""}
          </Text>
          <Text> Rating: {item.rating}</Text>
          <Text> Precio: {item.price}</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={()=>{addToCart(item)}}>
               <Ionicons name="ios-cart" size={35} color="green" />
               <Text style={styles.titleButton}> AGREGAR AL CARRITO </Text>            
            </Pressable>
          </View>
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
  titleButton: {
    fontSize: 15,
    fontFamily: "Kanit",
  },
  description:{
    fontSize: 20,
    marginVertical: 15,
  },
  containerButton: {
    marginVertical: 20,
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
    borderColor: colors.lighto,
    alignItems: "center",
  },

})

export default ProductDetail