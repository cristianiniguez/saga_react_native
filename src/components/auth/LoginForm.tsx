import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { userCredentials, userDetails } from '../../utils/userDB';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
  const [error, setError] = useState('');
  const { login, user } = useAuth();

  const getInitialValues = () => ({ username: '', password: '' });

  const getValidationSchema = () =>
    Yup.object({
      username: Yup.string().required('El nombre de usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    });

  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: (values) => {
      setError('');
      const { username, password } = values;

      if (username !== userCredentials.username || password !== userCredentials.password) {
        setError('El usuario o la contraseña no son correctos');
      } else {
        login(userDetails);
        console.log('Login correcto');
      }
    },
    validateOnChange: false,
    validationSchema: getValidationSchema(),
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        autoCapitalize='none'
        placeholder='Nombre de usuario'
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        autoCapitalize='none'
        placeholder='Contraseña'
        secureTextEntry
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Entrar' onPress={() => formik.handleSubmit()} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
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
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
});

export default LoginForm;
