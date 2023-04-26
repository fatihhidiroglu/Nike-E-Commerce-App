import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProductsScreen from "./screens/ProductsScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen"
import ShoppingCartScreen from "./screens/ShoppingCartScreen"
import { 
  Pressable,
  Text, 
} from "react-native"

import IconF from "react-native-vector-icons/FontAwesome5"
import { useSelector } from "react-redux"
import { selectNumberOfItems } from "./store/cartSlice"

const Stack = createNativeStackNavigator()

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems)

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ contentStyle: {backgroundColor: 'white'}}}
      >
        <Stack.Screen 
          name="Products" 
          component={ProductsScreen}
          options={({ navigation }) => ({ 
            headerRight: () => (
              <Pressable 
                onPress={() => navigation.navigate('Cart')} 
                style={{ flexDirection: 'row' }}
              >
                <IconF name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                  {numberOfItems}
                </Text>
              </Pressable>
            ),
          })} 
        />

        <Stack.Screen 
          name="Product Details" 
          component={ ProductDetailsScreen }
          options={{ presentation: 'modal' }}
        />
        
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation