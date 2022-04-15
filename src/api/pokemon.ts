import { API_HOST } from '../utils/constants';

export async function getPokemons(url = `${API_HOST}/pokemon?limit=20&offset=0`) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemonByUrl(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemonDetails(id: string) {
  const response = await fetch(`${API_HOST}/pokemon/${id}`);
  const data = await response.json();
  return data;
}
