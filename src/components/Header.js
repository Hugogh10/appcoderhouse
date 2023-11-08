import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from "../theme/colors";
import { AntDesign } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="aliwangwang-o1" size={30} color="white" />
      <Text style={styles.headerText}> {title} </Text>
    </View>
  );
};
  const styles = StyleSheet.create({
    container:{
        height: 85,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lighto,
      },
    
    headerText: {
        fontSize: 25,
        fontWeight:"600",
        color: colors.heavyg,
        fontFamily: "Kanit",
    }
  });


export default Header