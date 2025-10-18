# Portfolio Website

Um site de portfólio moderno e responsivo com tema alternável entre claro e escuro, desenvolvido com HTML, CSS e JavaScript puro.

## ✨ Funcionalidades

- **Tema Alternável**: Alterne entre modo claro e escuro com um clique
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Seções Completas**:
  - Hero/Introdução com apresentação
  - Sobre Mim com descrição profissional
  - Skills com tecnologias e ferramentas
  - Projetos com links para GitHub e demos
  - Experiência profissional
  - Contatos com formulário funcional
- **Navegação Suave**: Scroll suave entre seções
- **Animações**: Transições e efeitos visuais modernos
- **Formulário de Contato**: Integrado e pronto para uso

## 🎨 Paleta de Cores

### Modo Escuro (Padrão)
- **Principal**: Preto (#000000)
- **Secundária**: Roxo (#8b5cf6)
- **Texto**: Branco e tons de cinza

### Modo Claro
- **Principal**: Branco (#ffffff)
- **Secundária**: Preto (#000000)
- **Texto**: Preto e tons de cinza escuro

## 🚀 Como Usar

1. **Clone ou baixe o projeto**
   \`\`\`bash
   git clone [seu-repositorio]
   \`\`\`

2. **Abra o arquivo `index.html` no navegador**
   - Não é necessário servidor local
   - Funciona diretamente no navegador

3. **Personalize o conteúdo**
   - Edite o `index.html` para adicionar suas informações
   - Modifique o `styles.css` para ajustar o design
   - Adapte o `script.js` conforme necessário

## 📁 Estrutura do Projeto

\`\`\`
portfolio-website/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e tema
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
\`\`\`

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS e flexbox
- **JavaScript**: Interatividade e alternância de tema
- **LocalStorage**: Persistência da preferência de tema

## 📝 Personalização

### Alterar Informações Pessoais

Edite o arquivo `index.html` e substitua:
- Nome e título na seção hero
- Descrição na seção "Sobre Mim"
- Skills e tecnologias
- Projetos com seus próprios links
- Experiências profissionais
- Informações de contato

### Modificar Cores

No arquivo `styles.css`, ajuste as variáveis CSS:

\`\`\`css
:root {
    --bg-primary: #000000;
    --bg-secondary: #111111;
    --accent: #8b5cf6;
    /* ... outras variáveis */
}
\`\`\`

### Adicionar Novas Seções

1. Adicione o HTML da nova seção no `index.html`
2. Adicione o link no menu de navegação
3. Estilize no `styles.css`
4. Adicione funcionalidade no `script.js` se necessário

## 📧 Configurar Formulário de Contato

O formulário atualmente usa `mailto:`. Para um formulário funcional:

1. **Opção 1**: Use um serviço como [Formspree](https://formspree.io/)
2. **Opção 2**: Configure um backend próprio
3. **Opção 3**: Use serviços como EmailJS

Substitua a ação do formulário no `script.js`:

\`\`\`javascript
// Exemplo com Formspree
fetch('https://formspree.io/f/seu-id', {
    method: 'POST',
    body: formData
})
\`\`\`

## 🌐 Deploy

Você pode hospedar este site gratuitamente em:

- **GitHub Pages**: Ideal para projetos estáticos
- **Netlify**: Deploy automático e fácil
- **Vercel**: Rápido e com domínio personalizado
- **Cloudflare Pages**: Performance otimizada

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Sem dependências externas
- CSS e JS minificáveis
- Imagens otimizáveis
- Carregamento rápido

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

---

Desenvolvido com 💜 por [Seu Nome]
