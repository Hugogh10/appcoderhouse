import { View, Text, FlatList, Image, SafeAreaView, Pressable, colors, ActivityIndicator,StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { Ionicons } from '@expo/vector-icons';
import { useGetProductsQuery } from '../services/ecApi'


const Products = ({ route, navigation }) => {

  const { category } = route.params
  
  const { data: products, 
      isLoading, 
      isError 
  } = useGetProductsQuery()

  const [productsList, setProductsList] = useState( [] )
  const [filter, setFilter] = useState("")

    

  useEffect(
    () => {
        if(isLoading){
            return
        }
        const filterProdList = productCategory.filter( (el) => el.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) )
        setProductsList(filterProdList)
    }, [filter, isLoading])  

if(isLoading){
    return (
        <View style={styles.indicator}>
            <ActivityIndicator size={100} />
        </View>
    )
}

let productCategory =  category ? products.filter( (el) => (el.category == category)) : products

return (
<SafeAreaView style={styles.container}>
      <Header title="BIENVENIDO" navigation={navigation} />
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="caret-back-circle-outline" size={30} color="black" />
        </Pressable>
      <Search filter={filter} setFilter={setFilter}  />
    <FlatList
        style={styles.list}
        data={productsList}
        keyExtractor={productsList.id}
        renderItem={ ({ item }) => ( <ProductItem item={item} navigation={navigation} /> ) }
    />
</SafeAreaView>
)

}




const styles = StyleSheet.create({
container:{
    marginBottom: 250
},
indicator: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
}
})

export default Products