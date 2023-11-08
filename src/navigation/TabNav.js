import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation'
import Cart from "../screens/Cart.js";
import Profile from '../screens/Profile'
import { colors } from '../theme/colors';
import { Ionicons } from "@expo/vector-icons";
import ProfileNav from "./ProfileNav";




const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{title:"", headerShown: false}}>
      <Tab.Screen options={{tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
      name="shopping" 
      size={focused ? 35 : 20} 
      color={focused ? colors.lightp : colors.heavyg } />}} 
      name='rootNavigation' 
      component={RootNavigation} 
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={focused ? 35 : 20}
              color={focused ? colors.lightp : colors.heavyg }
            />
          ),
        }}
        name="profileNav"
        component={ProfileNav}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({ focused }) => (
          <Ionicons 
            name="ios-cart" 
            size={focused ? 35 : 20}
            color={focused ? colors.lightp : colors.heavyg }/>) 
                }}  
                name="Cart" 
                component={Cart}
            />

    </Tab.Navigator>
  )
}

export default TabNav

