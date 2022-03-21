import { Button, Text, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={goToSettings} title='Go to Settings' />
    </SafeAreaView>
  );
}
