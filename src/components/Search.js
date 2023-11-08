import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import { colors } from "../theme/colors.js";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

const Search = ( { setFilter } ) => {
    
    const [text, setText] = useState("")

    

    const clearSearch = () => { 
        setText("")
        setFilter("")
    }

    const doSearch = (value) => { 
        setText(value)
        setFilter(value)
    }


    return (
    <View style={styles.container}>
        <TextInput value={text} onChangeText={ (text) => doSearch(text) } style={styles.input} placeholder='Busca tu producto favorito...'/>
        <Pressable>
            <AntDesign onPress={ () => clearSearch() } name="close" style={styles.icon} size={24} color={colors.mediumr} />
        </Pressable>
        <Pressable>
            <AntDesign onPress={ () => {} } name="search1" style={styles.icon} size={24} color={colors.mediumr} />
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