import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginForm from './src/components/LoginForm';
import Greeting from './src/components/Greeting';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Greeting firstName='Cristian' lastName='Iñiguez' />
        <Greeting firstName='Mary' lastName='Saucedo' />
        <Greeting firstName='Dario' lastName='Rojas' />
        <LoginForm />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
