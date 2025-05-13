// src/services/AuthService.js
// Serviço de autenticação
import { AsyncStorage } from 'react-native';

export default class AuthService {
  static async login(username, password) {
    try {
      // Simulação de uma API de login
      // Em um projeto real, isso seria uma requisição HTTP
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username && password) {
            // Armazena o token fictício
            AsyncStorage.setItem('authToken', 'fake-auth-token');
            resolve({ 
              success: true, 
              user: { 
                id: 'user123', 
                username, 
                email: `${username}@example.com` 
              } 
            });
          } else {
            reject({ success: false, message: 'Credenciais inválidas' });
          }
        }, 1000);
      });
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  static async logout() {
    try {
      await AsyncStorage.removeItem('authToken');
      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  }

  static async isAuthenticated() {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return !!token;
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      return false;
    }
  }
}
