// src/components/Header.js
// Componente de cabeçalho
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ 
  title, 
  showBackButton = false, 
  rightComponent = null,
  style = {} 
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, style]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        )}
      </View>
      
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    flex: 2,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
  },
});

export default Header;
