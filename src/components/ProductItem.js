import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { setProductSelected } from "../redux/slice/homeSlice"
import { useDispatch } from 'react-redux';


const ProductItem = ({ item, navigation }) => {
  
  const dispatch = useDispatch();

  const onHandleProductDetail = () => {

    dispatch(setProductSelected(item));

    navigation.navigate("productDetail");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=> onHandleProductDetail()}>
      <Text style={styles.text}>{item.title}</Text>
      </Pressable>
      <Image
        style={styles.image}
        height={80}
        width={80}
        source={{uri: item.images[1]}}
        resizeMode='cover'
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.lightp,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
      fontSize: 28,
      fontWeight: "900",
      marginLeft: 20,
      fontFamily: "Ubuntu",
    },
    image:{
      marginRight: 10,
    }

})

export default ProductItem