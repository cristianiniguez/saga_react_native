import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { getPokemonFavorites } from '../api/favorite';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getPokemonFavorites().then(console.log);
  }, []);

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
}
