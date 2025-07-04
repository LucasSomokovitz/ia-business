# 7 Produção - Site Institucional

Site institucional da 7 Produção com design inspirado na Apple, focado em simplicidade, elegância e experiência do usuário.

## 🎨 Design Inspirado na Apple

Este projeto foi redesenhado com inspiração no design minimalista e elegante da Apple, incorporando:

- **Tipografia elegante**: Uso de fontes SF Pro Display e Inter com pesos variados
- **Espaçamento generoso**: Layout com muito espaço em branco para respiração visual
- **Cores minimalistas**: Paleta de cores neutras com foco no preto, branco e tons de cinza
- **Animações suaves**: Transições e micro-interações sutis e elegantes
- **Foco no conteúdo**: Design que prioriza a legibilidade e a experiência do usuário

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilização
- **Shadcn/ui** - Componentes UI
- **React Router** - Roteamento
- **Lucide React** - Ícones
- **Framer Motion** - Animações (opcional)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd ia-business-7-producao

# Instale as dependências
npm install
```

### Execução
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção
```bash
# Gere o build de produção
npm run build

# Visualize o build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do Shadcn/ui
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Services.tsx    # Seção de serviços
│   ├── Portfolio.tsx   # Seção de portfólio
│   ├── Contact.tsx     # Seção de contato
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas da aplicação
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
└── index.css           # Estilos globais
```

## 🎯 Características do Design

### Tipografia
- **SF Pro Display**: Fonte principal (fallback para Inter)
- **Pesos**: 300 (light), 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Hierarquia**: Títulos grandes com espaçamento generoso

### Cores
- **Preto**: #000000 (texto principal)
- **Branco**: #FFFFFF (fundo)
- **Cinzas**: Escala de 50 a 950 para variações sutis
- **Acentos**: Gradientes coloridos para elementos especiais

### Layout
- **Container**: Largura máxima de 1400px
- **Espaçamento**: Sistema baseado em múltiplos de 8px
- **Bordas**: Raio de 12px a 24px para elementos
- **Sombras**: Sutis e elegantes

### Animações
- **Transições**: 300ms para interações básicas
- **Hover effects**: Escala e mudanças de cor suaves
- **Loading states**: Animações de carregamento elegantes

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  apple: {
    blue: '#007AFF',
    gray: {
      50: '#F9F9F9',
      // ... outras variações
    }
  }
}
```

### Tipografia
As fontes podem ser alteradas no arquivo `tailwind.config.ts`:

```typescript
fontFamily: {
  'sf': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
}
```

## 📄 Páginas Disponíveis

- **/** - Página inicial com todas as seções
- **/nossa-essencia** - Sobre a empresa
- **/servicos** - Serviços oferecidos
- **/portfolio** - Portfólio de trabalhos
- **/contato** - Formulário de contato
- **/videos** - Galeria de vídeos
- **/audio** - Produções de áudio
- **/externa** - Produções externas
- **/estudio** - Produções em estúdio
- **/midias-sociais** - Gestão de redes sociais
- **/showreel** - Showreel da empresa

## 🚀 Deploy

O projeto está configurado para deploy na Vercel:

```bash
# Build para produção
npm run build

# Deploy automático via Vercel
vercel --prod
```

## 📞 Contato

- **Email**: 7producaobr@gmail.com
- **Telefone**: +55 (47) 99992-8103
- **Localização**: Blumenau - SC, Brasil
- **Instagram**: [@eltonprodutordigital](https://www.instagram.com/eltonprodutordigital/)

## 📝 Licença

Este projeto é propriedade da 7 Produção. Todos os direitos reservados.

---

**Desenvolvido com ❤️ pela 7 Produção**
