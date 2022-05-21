import { Text, View } from 'react-native';

import LoginForm from '../components/auth/LoginForm';
import UserData from '../components/auth/UserData';
import useAuth from '../hooks/useAuth';

export default function Account() {
  const { user } = useAuth();

  return <View>{user ? <UserData /> : <LoginForm />}</View>;
}
