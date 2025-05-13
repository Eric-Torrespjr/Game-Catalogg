// src/navigation/RootNavigator.js
// Configuração das rotas da aplicação
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../views/LoginScreen';
import MainCatalogScreen from '../views/MainCatalogScreen';
import GameDetailsScreen from '../views/GameDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainCatalog" component={MainCatalogScreen} />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
