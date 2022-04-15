import { FC } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../utils/getColorByPokemonType';

type PokemonHeaderProps = {
  image: string;
  name: string;
  order: number;
  type: string;
};

const PokemonHeader: FC<PokemonHeaderProps> = ({ image, name, order, type }) => {
  const color = getColorByPokemonType(type);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scale: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentImg: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});

export default PokemonHeader;
