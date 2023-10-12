import { View, Text, FlatList, Image, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Ionicons } from '@expo/vector-icons'; 
import { useGetProductsQuery } from '../services/ecApi'


const Products = ({ route, navigation }) => {

    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);
    const { item } = route.params;
    const { data } = useGetProductsQuery();
    
const products = useSelector(state => state.homeSlice.allProducts);

    

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
        <Ionicons name="caret-back-circle-outline" size={30} color="black" />
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