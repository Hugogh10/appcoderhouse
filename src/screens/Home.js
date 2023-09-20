import { View, Tex, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { categories } from "../data/categories";
import CategoryItem from '../components/CategoryItem';
import { colors } from '../theme/colors'


const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="Categorias" navigation={navigation} />
      <View style={styles.container}>
      <FlatList 
      data={categories}
      keyExtractor={(key) => key}
      renderItem={({ item }) => <CategoryItem navigation={navigation} item={item}/>}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: colors.mediumr,
      textAlign: 'center',
      padding: 10,
      borderRadius: 10,
  }
});

export default Home