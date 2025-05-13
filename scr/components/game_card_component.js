// src/components/GameCard.js
// Componente de card para jogos
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const GameCard = ({ 
  game, 
  onPress 
}) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: game.imageUrl || 'https://via.placeholder.com/150' }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {game.description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${game.price?.toFixed(2)}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{game.rating}</Text>
            <Text style={styles.ratingText}>★</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#f1c40f',
  },
});

export default GameCard;
