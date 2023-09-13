import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const CategoryItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.CategoryText}>{item}</Text>
    </View>
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