import { FC, useEffect, useState } from 'react';
import Icon from '@expo/vector-icons/FontAwesome5';
import {
  addPokemonToFavorites,
  isPokemonFavorite,
  removePokemonFromFavorites,
} from '../../api/favorite';

type PokemonFavoriteProps = {
  id: string;
};

const PokemonFavorite: FC<PokemonFavoriteProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [reloadCheck, setReloadCheck] = useState(false);
  console.log(isFavorite);

  useEffect(() => {
    isPokemonFavorite(id).then(setIsFavorite);
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addToFavorites = async () => {
    try {
      await addPokemonToFavorites(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFavorites = async () => {
    try {
      await removePokemonFromFavorites(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
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
