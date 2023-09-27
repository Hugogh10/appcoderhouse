import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation'
import Profile from '../screens/Profile'
import { colors } from '../theme/colors';
import { Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{title:"", headerShown: false}}>
      <Tab.Screen options={{tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
      name="shopping" 
      size={focused ? 35 : 20} 
      color={focused ? colors.mediumr : colors.heavyg } />}} 
      name='rootNavigation' 
      component={RootNavigation} 
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={focused ? 35 : 20}
              color={focused ? colors.mediumr : colors.heavyg }
            />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({})

export default TabNav

