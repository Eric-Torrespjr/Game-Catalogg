// src/viewmodels/GameViewModel.js
// ViewModel para a lógica dos jogos
import { useState, useEffect } from 'react';
import GameService from '../services/GameService';

export default function useGameViewModel() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGames = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const gamesData = await GameService.getGames();
      setGames(gamesData);
      return gamesData;
    } catch (error) {
      setError(error.message || 'Erro ao carregar jogos');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchGameById = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      const gameData = await GameService.getGameById(id);
      setSelectedGame(gameData);
      return gameData;
    } catch (error) {
      setError(error.message || `Erro ao carregar jogo com ID ${id}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    games,
    selectedGame,
    loading,
    error,
    fetchGames,
    fetchGameById
  };
}
