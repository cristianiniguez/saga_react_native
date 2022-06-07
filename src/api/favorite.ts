import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';

import { FAVORITE_STORAGE } from '../utils/constants';

export async function addPokemonToFavorites(id: string) {
  const favorites = await getPokemonFavorites();
  const newFavorites = [...favorites, id];
  await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  return favorites;
}

export async function getPokemonFavorites(): Promise<string[]> {
  const favorites = await AsyncStorage.getItem(FAVORITE_STORAGE);
  return favorites ? JSON.parse(favorites) : [];
}

export async function isPokemonFavorite(id: string) {
  const favorites = await getPokemonFavorites();
  return includes(favorites, id);
}

export async function removePokemonFromFavorites(id: string) {
  const favorites = await getPokemonFavorites();
  const newFavorites = pull(favorites, id);
  await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
}
