import { API_HOST } from '../utils/constants';

export async function getPokemons() {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemonByUrl(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
