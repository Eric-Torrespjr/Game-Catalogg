// src/views/GameDetailsScreen.js
// Tela de detalhes do jogo
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import Button from '../components/Button';
import useGameViewModel from '../viewmodels/GameViewModel';

const GameDetailsScreen = ({ route, navigation }) => {
  const { gameId } = route.params;
  const { selectedGame, loading, error, fetchGameById } = useGameViewModel();
  
  useEffect(() => {
    loadGameDetails();
  }, [gameId]);

  const loadGameDetails = async () => {
    try {
      await fetchGameById(gameId);
    } catch (error) {
      console.error('Erro ao carregar detalhes do jogo:', error);
    }
  };

  const handleBuyGame = () => {
    // Lógica para comprar o jogo (em um app real)
    alert(`Jogo ${selectedGame?.title} adicionado ao carrinho!`);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Detalhes do Jogo" showBackButton={true} />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#3b5998" />
        </View>
      </SafeAreaView>
    );
  }

  if (error || !selectedGame) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Detalhes do Jogo" showBackButton={true} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Ocorreu um erro ao carregar os detalhes do jogo.
          </Text>
          <Text style={styles.errorSubtext}>{error}</Text>
          <TouchableOpacity 
            style={styles.reloadButton} 
            onPress={loadGameDetails}
          >
            <Text style={styles.reloadText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <Header 
        title={selectedGame.title} 
        showBackButton={true} 
      />
      
      <ScrollView style={styles.scrollView}>
        <Image 
          source={{ uri: selectedGame.imageUrl || 'https://via.placeholder.com/400x200' }}
          style={styles.image}
          resizeMode="cover"
        />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{selectedGame.title}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{selectedGame.rating}</Text>
              <Text style={styles.ratingText}>★</Text>
            </View>
          </View>
          
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Preço:</Text>
            <Text style={styles.price}>${selectedGame.price?.toFixed(2)}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.description}>{selectedGame.description}</Text>
          </View>
          
          {/* Detalhes adicionais do jogo poderiam ser adicionados aqui */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Características</Text>
            <View style={styles.featureItem}>
              <Ionicons name="game-controller" size={20} color="#3b5998" />
              <Text style={styles.featureText}>Multiplayer Online</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="trophy" size={20} color="#3b5998" />
              <Text style={styles.featureText}>Conquistas</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="cloud-download" size={20} color="#3b5998" />
              <Text style={styles.featureText}>Conteúdo para download</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Comprar Agora"
          onPress={handleBuyGame}
          gradientColors={['#27ae60', '#2ecc71', '#27ae60']}
        />
      </View>
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
    marginBottom: 16,
  },
  reloadButton: {
    padding: 10,
    backgroundColor: '#3b5998',
    borderRadius: 5,
  },
  reloadText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1c40f',
    padding: 6,
    borderRadius: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 2,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 18,
    marginRight: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#444',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default GameDetailsScreen;
