import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Products from '../screens/Product'
import ProductDetail from '../screens/ProductDetail'


const RootNavigation = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen component={Home} name="home" />
        <Stack.Screen component={Products} name="products" />
        <Stack.Screen component={ProductDetail} name="productDetail" />
    </Stack.Navigator>
  )
}

export default RootNavigation