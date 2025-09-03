# 🎉 SPA de Aniversário - Surpresa Especial 🎉

Um SPA em React criado especialmente para uma surpresa de aniversário, com animações de confetes, balões flutuantes e um portfolio de memórias especiais.

## ✨ Funcionalidades

- **Tela inicial** com botão "Começar" e balões animados
- **Animações de confetes** que aparecem ao clicar no botão
- **Portfolio de memórias** com imagens e descrições personalizadas
- **Design responsivo** para funcionar em qualquer dispositivo
- **Animações suaves** com Framer Motion
- **Deploy fácil** no GitHub Pages

## 🚀 Como personalizar

### 1. Adicionar suas fotos

Coloque as fotos da sua esposa na pasta `public/images/` com os seguintes nomes:

- `memory1.jpg` - Nosso Primeiro Encontro
- `memory2.jpg` - Nossa Primeira Viagem
- `memory3.jpg` - O Dia do Nosso Casamento
- `memory4.jpg` - Momentos Especiais
- `memory5.jpg` - Nossos Sonhos
- `memory6.jpg` - Hoje e Sempre

### 2. Personalizar textos

Edite o arquivo `src/components/Portfolio.jsx` e modifique o array `memories` com suas próprias descrições:

\`\`\`javascript
const memories = [
  {
    id: 1,
    image: '/images/memory1.jpg',
    title: 'Seu título personalizado',
    description: 'Sua descrição personalizada...'
  },
  // ... outros memories
]
\`\`\`

### 3. Personalizar cores e estilos

- **Tela inicial**: `src/components/StartScreen.css`
- **Portfolio**: `src/components/Portfolio.css`
- **Estilos globais**: `src/App.css`

## 📱 Como executar localmente

\`\`\`bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:5173
\`\`\`

## 🌐 Como fazer deploy no GitHub Pages

### 1. Configurar o repositório

1. Crie um repositório no GitHub (por exemplo: "birthday-surprise")
2. Faça push do código para o repositório

### 2. Atualizar configurações

1. No arquivo `package.json`, substitua \`SEU_USUARIO\` pelo seu usuário do GitHub:
   \`\`\`json
   "homepage": "https://SEU_USUARIO.github.io/birthday"
   \`\`\`

2. No arquivo \`vite.config.js\`, confirme se o nome do repositório está correto:
   \`\`\`javascript
   base: '/birthday/' // Nome do seu repositório
   \`\`\`

### 3. Fazer deploy

\`\`\`bash
# Deploy automático
npm run deploy
\`\`\`

### 4. Ativar GitHub Pages

1. Vá para as configurações do repositório no GitHub
2. **Settings** > **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: gh-pages
5. Aguarde alguns minutos e acesse a URL

## 🛠️ Tecnologias utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool moderna e rápida
- **Framer Motion** - Animações suaves
- **React Confetti** - Efeito de confetes
- **CSS3** - Estilização moderna
- **GitHub Pages** - Hospedagem gratuita

## 📂 Estrutura do projeto

\`\`\`
src/
├── components/
│   ├── StartScreen.jsx       # Tela inicial com botão
│   ├── StartScreen.css       # Estilos da tela inicial
│   ├── Portfolio.jsx         # Portfolio de memórias
│   └── Portfolio.css         # Estilos do portfolio
├── App.jsx                   # Componente principal
├── App.css                   # Estilos globais
└── main.jsx                  # Entrada da aplicação

public/
└── images/                   # Pasta para suas fotos
    ├── memory1.jpg
    ├── memory2.jpg
    ├── ... (suas fotos)
    └── README.md
\`\`\`

## 💡 Dicas

- **Fotos**: Use imagens de boa qualidade (800x600px recomendado)
- **Textos**: Seja carinhoso e específico nas descrições
- **Performance**: As imagens são otimizadas automaticamente
- **Mobile**: O design é totalmente responsivo
- **Compartilhamento**: Funcionará perfeitamente em qualquer dispositivo

## ❤️ Feito com amor

Este projeto foi criado especialmente para uma surpresa de aniversário. Desejamos que seja um momento inesquecível! 🎂✨

---

**Dica final**: Teste a aplicação localmente antes de fazer o deploy para garantir que tudo está perfeito!