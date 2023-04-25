import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  FlatList,
} from 'react-native';

import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen/>

      <StatusBar barStyle="default"/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
