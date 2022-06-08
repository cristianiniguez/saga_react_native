import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/FontAwesome5';

import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='PokedexTab' screenOptions={{ headerShown: false }}>
      <Tab.Screen
        component={FavoritesNavigation}
        name='FavoritesTab'
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        component={PokedexNavigation}
        name='PokedexTab'
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        component={AccountNavigation}
        name='AccountTab'
        options={{
          tabBarLabel: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image source={require('../assets/pokeball.png')} style={{ height: 75, top: -15, width: 75 }} />
  );
}
