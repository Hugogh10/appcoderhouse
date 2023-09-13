import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { categories } from "../data/categories";
import { colors } from '../theme/colors';
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={categories}
      keyExtractor={(key) => key}
      renderItem={({ item }) => <CategoryItem item={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.mediumr,
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
    }
});


export default Categories