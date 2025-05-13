// src/views/LoginScreen.js
// Tela de login
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Toaster, toast } from 'sonner-native';

import Button from '../components/Button';
import useAuthViewModel from '../viewmodels/AuthViewModel';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuthViewModel();

  useEffect(() => {
    if (error) {
      toast.error('Erro de login', {
        description: error,
      });
    }
  }, [error]);

  const handleLogin = async () => {
    if (!username || !password) {
      toast.error('Campos obrigatórios', {
        description: 'Por favor, preencha todos os campos',
      });
      return;
    }

    try {
      const result = await login(username, password);
      if (result.success) {
        toast.success('Login bem-sucedido!');
        navigation.replace('MainCatalog');
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Toaster />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.logo}
          />
          <Text style={styles.appTitle}>Game Catalog</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <Button
            title={loading ? "Processando..." : "Entrar"}
            onPress={handleLogin}
            disabled={loading}
          />

          {loading && <ActivityIndicator color="#fff" style={styles.loader} />}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Registre-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
  },
  loader: {
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  footerText: {
    color: '#fff',
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
