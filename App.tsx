import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  FlatList,
} from 'react-native';

import ProductScreen from './src/screens/ProductScreen'
import ProductDetailsScreen from './src/screens/ProductDetailsScreen'
import ShoppingCartScreen from './src/screens/ShoppingCartScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen/> */}
      {/* <ProductDetailsScreen/> */}
      <ShoppingCartScreen />

      <StatusBar barStyle="default"/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
