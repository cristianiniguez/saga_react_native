import { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ItemMenuProps = {
  title: ReactNode;
  text: ReactNode;
};

const ItemMenu: FC<ItemMenuProps> = ({ text, title }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
});

export default ItemMenu;
