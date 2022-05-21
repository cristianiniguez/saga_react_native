import { FC, useEffect, useState } from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';
import { addPokemonToFavorites, isPokemonFavorite } from '../../api/favorite';

type PokemonFavoriteProps = {
  id: string;
};

const PokemonFavorite: FC<PokemonFavoriteProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite);

  useEffect(() => {
    isPokemonFavorite(id).then(setIsFavorite);
  }, [id]);

  const addToFavorites = async () => {
    await addPokemonToFavorites(id);
  };

  const removeFromFavorites = async () => {
    console.log('Elimina de favoritos');
  };

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      solid={isFavorite}
      onPress={isFavorite ? removeFromFavorites : addToFavorites}
      style={{ marginRight: 20 }}
    />
  );
};

export default PokemonFavorite;
