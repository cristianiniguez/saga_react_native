import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { capitalize } from 'lodash';

type PokemonStatsProps = {
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string };
  }[];
};

const PokemonStats: FC<PokemonStatsProps> = ({ stats }) => {
  console.log(stats);

  const barStyles = (number: number) => ({
    backgroundColor: number > 50 ? '#00ac17' : '#ff3e3e',
    width: `${number}%`,
  });

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map(({ base_stat, stat }, id) => (
        <View key={id} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={{ ...styles.bar, ...barStyles(base_stat) }} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});

export default PokemonStats;
