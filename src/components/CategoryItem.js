import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { setCategory } from '../redux/slice/homeSlice';
import { useDispatch } from 'react-redux';
//import { useWindowDimensions } from "react-native"

const CategoryItem = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const onHandleItem = () => {
    dispatch(setCategory(item));

    navigation.navigate("products", { item: item});
  };
  
  //const { height, width } = useWindowDimensions();
  return (
    <Pressable onPress={() => onHandleItem()}>
      <Text style={styles.categoryText}>{item}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    
    categoryText :{
        fontSize: 20,
        margin: 3,
        color: colors.heavyg,
        borderRadius: 5,
        padding: 3,
        borderWidth: 2,
        borderColor: colors.lighto,
        width:"100%",
        textAlign: "center",
    }
  });
export default CategoryItem