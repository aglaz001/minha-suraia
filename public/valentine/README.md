# 💖 Valentine Interactive Website

Um site interativo romântico especialmente criado como presente de Dia dos Namorados. Uma experiência completa de jogo/visual novel com múltiplas fases.

## 🎮 Características

### Fase 1 - A Pergunta Clássica
- Pergunta romântica com botão "SIM" e "NÃO"
- Botão "NÃO" foge do cursor (efeito divertido)
- Corações flutuantes no fundo
- Música de fundo (opcional)
- Animação de confetti ao clicar "SIM"

### Fase 2 - Checkpoint Emocional
- 3 perguntas abertas personalizadas
- Respostas salvas em localStorage
- Design limpo e romântico

### Fase 3 - Mini Jogos
**Jogo 1: Apanha os Corações**
- Clica em 5 corações antes que desapareçam
- Contador visual de progresso

**Jogo 2: Quiz do Casal**
- 3 perguntas de múltipla escolha
- Feedback visual para respostas corretas/incorretas
- Sistema de pontuação com corações

### Fase 4 - A Pergunta Final
- Escolha entre restaurante ou jantar caseiro
- Detalhes personalizados para cada opção
- Mensagens românticas

### Fase Final
- Resumo das respostas da Fase 2
- Mensagem final de amor
- Chuva de corações animada
- Efeito emocional e memorável

## 🎨 Características Técnicas

- **HTML5, CSS3, Vanilla JavaScript** - Sem frameworks
- **Totalmente responsivo** - Funciona em mobile e desktop
- **Animações suaves** - CSS animations e transições
- **LocalStorage** - Salva respostas do usuário
- **Canvas API** - Para efeito de confetti
- **Efeito typewriter** - Texto com efeito de máquina de escrever
- **Contador de dias juntos** - Calcula automaticamente

## 📝 Como Personalizar

### 1. Data do Relacionamento
No arquivo `script.js`, linha ~133:
```javascript
const startDate = new Date('2024-01-01'); // Altere para a sua data!
```

### 2. Perguntas do Quiz
No arquivo `script.js`, linhas 12-40:
```javascript
const quizQuestions = [
    {
        question: "Onde foi o nosso primeiro encontro?",
        options: [
            "Num café",
            "No cinema",
            "Num restaurante",
            "No parque"
        ],
        correct: 0 // Índice da resposta correta (0-3)
    },
    // ... mais perguntas
];
```

### 3. Detalhes do Restaurante
No arquivo `index.html`, linhas ~179-184:
```html
<p class="details-item">
    <strong>Restaurante:</strong> [Nome do Restaurante]
</p>
<p class="details-item">
    <strong>Hora:</strong> 20:00
</p>
```

### 4. Menu Caseiro
No arquivo `index.html`, linhas ~199-213:
```html
<h4 class="menu-category">🥗 Entrada</h4>
<p class="menu-item">Salada Caprese com mozarela fresca e tomate</p>
```

### 5. Cores e Estilo
No arquivo `style.css`, linhas 11-21:
```css
:root {
    --primary: #FF4D8D;
    --primary-light: #FF7BA8;
    --secondary: #FFB4D6;
    /* ... mais cores */
}
```

### 6. Adicionar Música (Opcional)
1. Adicione um arquivo de áudio na pasta `assets/`
2. No arquivo `script.js`, função `playBackgroundMusic()`:
```javascript
function playBackgroundMusic() {
    const audio = new Audio('assets/romantic-music.mp3');
    audio.loop = true;
    audio.play();
}
```

## 🚀 Como Usar

### Método 1: Local
1. Baixe todos os arquivos
2. Mantenha a estrutura:
   ```
   valentine/
   ├── index.html
   ├── style.css
   ├── script.js
   └── assets/ (opcional, para música)
   ```
3. Abra `index.html` no navegador

### Método 2: Servidor Web
1. Faça upload dos arquivos para um servidor
2. Aceda através do URL
3. Partilhe o link com a sua namorada!

### Método 3: GitHub Pages (Grátis)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações
4. Partilhe o link gerado!

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Tablets e iPads
- ✅ Funciona offline (depois de carregado)

## 🎯 Dicas de Uso

1. **Teste antes!** - Passe por todas as fases para garantir que está tudo correto
2. **Personalize bem** - Quanto mais personalizado, mais especial!
3. **Adicione fotos** - Pode adicionar fotos de vocês nos fundos
4. **Música ambiente** - Uma música romântica faz toda a diferença
5. **Momento certo** - Mostre-lhe no momento perfeito!

## 💡 Ideias Extras

- Adicione fotos do casal em cada fase
- Crie mais perguntas no quiz
- Adicione uma galeria de fotos
- Inclua uma linha do tempo do relacionamento
- Adicione mais mini-jogos

## 🐛 Resolução de Problemas

**O botão NÃO não se move:**
- Certifique-se de que está a usar um navegador moderno
- Verifique se o JavaScript está ativo

**As respostas não são guardadas:**
- Verifique se o localStorage está ativo no navegador
- Alguns navegadores em modo privado bloqueiam localStorage

**Animações não funcionam:**
- Verifique se o CSS está a carregar corretamente
- Tente outro navegador

## ❤️ Créditos

Criado com muito amor e dedicação.
Um projeto especial para um dia especial.

---

**Boa sorte com o teu presente romântico! 💕**
