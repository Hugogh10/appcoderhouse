import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { colors } from "../theme/colors";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
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
        backgroundColor: colors.mediumr,
      },
    
    headerText: {
        fontSize: 25,
        fontWeight:"600",
        color: colors.heavyg,
        fontFamily: "Kanit",
    }
  });


export default Header