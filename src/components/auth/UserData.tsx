import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';

import useAuth from '../../hooks/useAuth';
import ItemMenu from './ItemMenu';
import { getPokemonFavorites } from '../../api/favorite';
import { size } from 'lodash';

const UserData = () => {
  const { user, logout } = useAuth();
  const [total, setTotal] = useState<number>(0);

  const loadFavorites = async () => {
    const response = await getPokemonFavorites();
    setTotal(size(response));
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  if (!user) return;

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>
          {user.firstName} {user.lastName}
        </Text>
      </View>

      <View>
        <ItemMenu title='Nombre' text={`${user.firstName} ${user.lastName}`} />
        <ItemMenu title='Usuario' text={user.username} />
        <ItemMenu title='Email' text={user.email} />
        <ItemMenu title='Total de Favoritos' text={total} />
      </View>

      <Button onPress={() => logout()} title='Cerrar sesión' />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
});

export default UserData;
