// src/services/GameService.js
// Serviço para obter dados de jogos
import Game from '../models/Game';

export default class GameService {
  static async getGames() {
    try {
      // Simulação de uma API para obter jogos
      // Em um projeto real, isso seria uma requisição HTTP
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockGames = [
            {
              id: '1',
              title: 'The Last of Us Part II',
              description: 'Um jogo de ação e aventura em um mundo pós-apocalíptico.',
              imageUrl: 'https://example.com/tlou2.jpg',
              price: 59.99,
              rating: 4.8
            },
            {
              id: '2',
              title: 'Cyberpunk 2077',
              description: 'RPG de mundo aberto futurista.',
              imageUrl: 'https://example.com/cyberpunk.jpg',
              price: 49.99,
              rating: 4.2
            },
            {
              id: '3',
              title: 'Red Dead Redemption 2',
              description: 'Jogo de ação e aventura no velho oeste.',
              imageUrl: 'https://example.com/rdr2.jpg',
              price: 39.99,
              rating: 4.9
            }
          ];
          
          // Converte os dados brutos em instâncias do modelo Game
          const games = mockGames.map(game => Game.fromJson(game));
          resolve(games);
        }, 1000);
      });
    } catch (error) {
      console.error('Erro ao obter jogos:', error);
      throw error;
    }
  }

  static async getGameById(id) {
    try {
      // Simulação de uma API para obter um jogo específico
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const mockGame = {
            id: id,
            title: id === '1' ? 'The Last of Us Part II' : 'Jogo Desconhecido',
            description: 'Descrição detalhada do jogo...',
            imageUrl: 'https://example.com/game.jpg',
            price: 59.99,
            rating: 4.8
          };
          
          if (mockGame.title !== 'Jogo Desconhecido') {
            resolve(Game.fromJson(mockGame));
          } else {
            reject(new Error('Jogo não encontrado'));
          }
        }, 800);
      });
    } catch (error) {
      console.error(`Erro ao obter jogo com ID ${id}:`, error);
      throw error;
    }
  }
}
