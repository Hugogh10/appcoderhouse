import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
//import { useWindowDimensions } from "react-native"

const CategoryItem = ({ item, navigation }) => {
  //const { height, width } = useWindowDimensions();



  return (
    <Pressable onPress={() => navigation.navigate("products", { item: item})}>
      <Text style={styles.CategoryText}>{item}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    
    CategoryText :{
        fontSize: 20,
        margin: 3,
        color: colors.heavyg,
        backgroundColor: colors.lighto,
        borderRadius: 5,
        padding: 3,
        borderWidth: 2,
        borderColor: colors.heavyg,
        width:"95%",
        textAlign: "center",
    }
  });
export default CategoryItem