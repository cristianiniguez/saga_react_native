import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput autoCapitalize='none' placeholder='Nombre de usuario' style={styles.input} />
      <TextInput
        autoCapitalize='none'
        placeholder='Contraseña'
        secureTextEntry
        style={styles.input}
      />
      <Button title='Entrar' onPress={() => console.log('Entrando')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default LoginForm;
