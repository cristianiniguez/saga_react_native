import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';

import { FAVORITE_STORAGE } from '../utils/constants';

export async function addPokemonToFavorites(id: string) {
  const favorites = [];
  favorites.push(id);
  await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
}

export async function getPokemonFavorites() {
  const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE);
  return favorites ? JSON.parse(favorites) : [];
}