import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const getInitialValues = () => ({ username: '', password: '' });

  const getValidationSchema = () =>
    Yup.object({
      username: Yup.string().required('El nombre de usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    });

  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: (values) => {
      console.log('Formulario Enviado');
      console.log(values);
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
