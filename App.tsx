import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />

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
