import { 
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions, 
  Text,
  ScrollView,
  Pressable,
} from "react-native"
import products from "../data/products"

const ProductDetailsScreen = () => {
  const product = products[0]

  const {width} = useWindowDimensions()

  const addToCart = () => {
    console.warn('Add To Cart')
  }

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          renderItem={({item}) => (
            <Image source={{ uri: item }} style={{width: width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
      {/* Navigation icon */}
    </View>
    
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
    color: '#333',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#333',
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
    color: '#333',
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

export default ProductDetailsScreen