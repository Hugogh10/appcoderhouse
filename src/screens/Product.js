import { View, Text, FlatList, Image, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'

const Products = ({ route, navigation }) => {

    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;
    

    useEffect(() => {
      const categoryProducts = products.filter((el) => el.category === item)
        setCategoryProd(categoryProducts);

        if (text) {
            const titleProduct = products.filter(
              (el) => el.title.toLowerCase() === text.toLowerCase()
            );

            setCategoryProd(titleProduct);
        }

        }, [text, item]);
    

  return (
    <SafeAreaView>
    <View>
        <Header title={item}/>
        <Pressable onPress={()=> navigation.goBack()}>
        <Text>ATRAS</Text>
      </Pressable>
        <Search text={text} setText={setText} />

        <FlatList 
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({ item }) => <ProductItem navigation={navigation} item={item} />}
        />
        
    </View>
    </SafeAreaView>
  )
}

export default Products