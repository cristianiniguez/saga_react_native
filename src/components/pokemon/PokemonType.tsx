import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';

type PokemonTypeProps = {
  types: { slot: number; type: { name: string; url: string } }[];
};

const PokemonType: FC<PokemonTypeProps> = ({ types }) => {
  return (
    <View style={styles.content}>
      {types.map(({ slot, type }) => (
        <View
          key={slot}
          style={{ ...styles.pill, backgroundColor: getColorByPokemonType(type.name) }}
        >
          <Text>{capitalize(type.name)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});

export default PokemonType;
