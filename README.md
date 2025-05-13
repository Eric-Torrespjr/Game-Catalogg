ame Catalog - React Native App 📱🎮
Um catálogo de jogos mobile desenvolvido em React Native com:

Navegação entre telas

Listagem de jogos com cards

Detalhes do jogo

Autenticação simulada

Componentes reutilizáveis

#PRIMEIRA VERSAO APENAS COM A ESTRUTUTURA DO APP E INTERFACE
🛠 Tecnologias
React Native

React Navigation (Stack Navigator)

Expo (para desenvolvimento)

Expo Vector Icons

Expo Linear Gradient

AsyncStorage (dados offline)

A0dev (IA usada para criar a interface)

⚙️ Como Executar
Clone o repositório

bash
git clone https://github.com/seu-usuario/game-catalog.git  
cd game-catalog  
Instale as dependências

bash
npm install  
# ou  
yarn install  
Execute o app

bash
expo start  
Escaneie o QR code com o Expo Go (CELULAR)



📂 Estrutura do Projeto
src/  
├── components/      # Componentes reutilizáveis  
│   ├── Button.js    # Botão customizado  
│   ├── GameCard.js  # Card de jogo  
│   └── Header.js    # Cabeçalho  
├── models/          # Modelos de dados  
│   └── Game.js      # Entidade "Jogo"  
├── navigation/      # Configuração de rotas  
│   └── RootNavigator.js  
├── services/        # Lógica de serviços  
│   ├── AuthService.js  # Autenticação  
│   └── GameService.js # API de jogos (RAWG)  
├── utils/           # Utilitários  
│   └── constants.js # Cores, tamanhos, etc.
