import { Button, Text, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToPage('Home')} title='Go to Home' />
    </View>
  );
}
