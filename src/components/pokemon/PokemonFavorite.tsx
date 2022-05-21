import { FC } from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';
import { addPokemonToFavorites } from '../../api/favorite';

type PokemonFavoriteProps = {
  id: string;
};

const PokemonFavorite: FC<PokemonFavoriteProps> = ({ id }) => {
  const addToFavorites = async () => {
    await addPokemonToFavorites(id);
  };

  return (
    <Icon
      name='heart'
      color='#fff'
      size={20}
      onPress={addToFavorites}
      style={{ marginRight: 20 }}
    />
  );
};

export default PokemonFavorite;
