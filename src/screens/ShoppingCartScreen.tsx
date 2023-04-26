import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Pressable,
} from 'react-native'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>420,00 US$</Text>
    </View>
  </View>
)



const ShoppingCartScreen = () => {
  return (
    <>
      <FlatList 
        data={cart} 
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ ShoppingCartTotals }
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: '#555',
  },
  textBold: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    padding: 20,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
})
export default ShoppingCartScreen