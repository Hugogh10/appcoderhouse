import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryItem from '../components/CategoryItem';
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/ecApi';


const Home = ({navigation}) => {

  //const categories = useSelector((state) => state.homeSlice.allCategories);
  
  const datos = useGetCategoriesQuery();

  const categories = datos.data

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