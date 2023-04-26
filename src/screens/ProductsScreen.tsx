import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';

import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';

interface IProductsScreen { navigation: any }

const ProductsScreen:FC<IProductsScreen> = ({ navigation }) => {

  return (
    <FlatList 
        data={products}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => navigation.navigate('Product Details')} 
            style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
        scrollEnabled={true}
      />
  )
}
const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
})

export default ProductsScreen;