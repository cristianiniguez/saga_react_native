import { FC } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const NoLogged = () => {
  const navigation = useNavigation<NativeStackNavigationProp<{ Account: undefined }>>();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para ver esta pantalla debes iniciar sesión</Text>
      <Button title='Ir al login' onPress={() => navigation.navigate('Account')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default NoLogged;
