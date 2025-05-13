// src/utils/constants.js
// Constantes da aplicação
export const APP_NAME = 'Game Catalog';

// Cores
export const COLORS = {
  PRIMARY: '#3b5998',
  SECONDARY: '#192f6a',
  ACCENT: '#f1c40f',
  BACKGROUND: '#f5f5f5',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  ERROR: '#e74c3c',
  SUCCESS: '#2ecc71',
  TEXT: {
    PRIMARY: '#2c3e50',
    SECONDARY: '#666666',
    LIGHT: '#999999',
  }
};

// Dimensões
export const SIZES = {
  PADDING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  RADIUS: {
    XS: 4,
    SM: 8,
    MD: 12,
    LG: 16,
    XL: 24,
  },
  FONT: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 20,
    XXL: 24,
    XXXL: 30,
  }
};

// API endpoints (mock)
export const API = {
  BASE_URL: 'https://api.example.com',
  ENDPOINTS: {
    LOGIN: '/auth/login',
    GAMES: '/games',
    GAME_DETAILS: (id) => `/games/${id}`,
  }
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
};

// Configurações de animação
export const ANIMATION = {
  DURATION: {
    SHORT: 200,
    MEDIUM: 300,
    LONG: 500,
  }
};
