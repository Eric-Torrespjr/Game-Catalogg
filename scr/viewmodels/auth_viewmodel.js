// src/viewmodels/AuthViewModel.js
// ViewModel para a lógica de autenticação
import { useState } from 'react';
import AuthService from '../services/AuthService';

export default function useAuthViewModel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await AuthService.login(username, password);
      setUser(response.user);
      return response;
    } catch (error) {
      setError(error.message || 'Falha na autenticação');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    
    try {
      await AuthService.logout();
      setUser(null);
      return { success: true };
    } catch (error) {
      setError(error.message || 'Erro ao fazer logout');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const checkAuthStatus = async () => {
    setLoading(true);
    
    try {
      const isAuthenticated = await AuthService.isAuthenticated();
      return isAuthenticated;
    } catch (error) {
      setError(error.message || 'Erro ao verificar autenticação');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { 
    user, 
    loading, 
    error, 
    login, 
    logout, 
    checkAuthStatus 
  };
}
