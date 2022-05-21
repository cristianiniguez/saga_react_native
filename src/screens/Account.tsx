import { Text, View } from 'react-native';

import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';

export default function Account() {
  const auth = null;

  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
      <Text>Account</Text>
    </View>
  );
}
