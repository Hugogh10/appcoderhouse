import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../theme/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Search = ({text, setText}) => {
  const clearText = () => {
    setText(null)
  }
  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={(value) => setText(value)}
        value={text}
        style={styles.input} 
        placeholder="Buscar.." />
        <Pressable onPress={() => clearText()}>
        <MaterialCommunityIcons name="close-octagon-outline" size={45} color="red" />
        </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        marginTop: 25,
    },
    input:{
        width:"78%",
        borderWidth: 3,
        borderRadius: 8,
        borderColor: colors.mediumr,
        padding: 10,
        fontSize: 20,
        marginRight: 15,

    }

})
export default Search