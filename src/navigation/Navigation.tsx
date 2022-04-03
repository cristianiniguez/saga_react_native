import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/FontAwesome5';

import Favorites from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Favorites}
        name='Favorites'
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        component={Pokedex}
        name='Pokedex'
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        component={Account}
        name='Account'
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
