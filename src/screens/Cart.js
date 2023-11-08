import { StyleSheet, Text, View, Button, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem.js'
import { colors } from '../theme/colors.js'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from '../components/Header.js';


const Cart = () => {

    const cart = useSelector((state) => state.cartSlice.cartList);

    return (
    <View>
        <Header title="CARRO DE COMPRAS" />
        <View style={styles.container}>
            {cart[0] ? (
                <FlatList
                    style={styles.list}
                    data={ [...cart] }
                    keyExtractor={ (key) => Math.random(key) }
                    renderItem={ ( { item } ) =>  ( <CartItem item={ item } /> )  }
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.text}>No hay productos agregados</Text>
                </View>
                
            ) }
        </View>
            <Pressable
              style={styles.containerIcon}
              onPress={()=>{addToCart(item)}}>
               <MaterialCommunityIcons name="cash-register" size={24} color="black" />
               <Text style={styles.titleButton}> FINALIZAR COMPRA </Text>            
            </Pressable>
        
        <Text style={styles.text}>
            Total: $ {cart ? ( cart.reduce((accumulator, currentValue) => accumulator + currentValue.price*currentValue.count, 0) ) : (0)} 
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20
    },
    container: {
        alignItems: 'center',
    },
    emptyContainer: {
        alignItems: 'center',
        height: 100
    },
    list: {
        borderColor: colors.lighto,
        borderRadius: 20,
        borderWidth: 2,
        width: "80%",
        maxHeight: 500
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 15
    },
    containerButton: {
        marginVertical: 20,
        alignItems: "center",
      },
      containerIcon: {
        borderWidth: 2,
        padding: 5,
        borderRadius: 8,
        borderColor: colors.lighto,
        alignItems: "center",
      },
});

export default Cart