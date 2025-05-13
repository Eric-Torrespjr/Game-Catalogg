// src/views/MainCatalogScreen.js
// Tela principal do catálogo
import React, { useEffect, useState } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  Text,
  RefreshControl
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import GameCard from '../components/GameCard';
import useGameViewModel from '../viewmodels/GameViewModel';
import useAuthViewModel from '../viewmodels/AuthViewModel';

const MainCatalogScreen = ({ navigation }) => {
  const { games, loading, error, fetchGames } = useGameViewModel();
  const { logout } = useAuthViewModel();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      await fetchGames();
    } catch (error) {
      console.error('Erro ao carregar jogos:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadGames();
    setRefreshing(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigation.replace('Login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleGamePress = (game) => {
    navigation.navigate('GameDetails', { gameId: game.id });
  };

  const renderLogoutButton = () => (
    <Ionicons
      name="log-out-outline"
      size={24}
      color="#000"
      onPress={handleLogout}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <Header 
        title="Catálogo de Jogos" 
        rightComponent={renderLogoutButton()}
      />
      
      {loading && !refreshing ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#3b5998" />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Ocorreu um erro ao carregar os jogos.
          </Text>
          <Text style={styles.errorSubtext}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <GameCard 
              game={item} 
              onPress={() => handleGamePress(item)} 
            />
          )}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#3b5998']}
            />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Nenhum jogo encontrado.
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingVertical: 8,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});

export default MainCatalogScreen;
