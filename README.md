# SiteIza - Projeto Izahub

Este é o projeto do site Izahub, uma landing page para uma empresa de tecnologia.

## Estrutura do Projeto

- `index.html`: Página principal do site
- `style.css`: Estilos CSS para o site
- `js/main.js`: JavaScript para funcionalidades interativas
- `img/`: Pasta com imagens utilizadas no site

## Como Abrir no Visual Studio Code

1. Abra o Visual Studio Code no seu computador.
2. Clique em "File" (Arquivo) no menu superior.
3. Selecione "Open Folder" (Abrir Pasta).
4. Navegue até a pasta `SiteIza` dentro da sua área de trabalho (`/Users/alexlima/Desktop/SiteIza`).
5. Clique em "Open" (Abrir).

Agora você pode editar os arquivos diretamente no VSCode.

## Como Visualizar o Site

Para visualizar o site no navegador:

1. Abra o arquivo `index.html` no VSCode.
2. Clique com o botão direito no arquivo e selecione "Open with Live Server" (se você tiver a extensão Live Server instalada).
3. Ou simplesmente arraste o arquivo `index.html` para o navegador.

## Funcionalidades

- Design responsivo
- Menu mobile com toggle
- Seções: Hero, Resultados, Diferenciais, Soluções, Serviços, Newsletter, Footer

## Próximos Passos

- Corrigir links das redes sociais
- Adicionar funcionalidade ao formulário de newsletter
- Implementar navegação suave entre seções

# 🌐 Documentação do Projeto - Site Institucional de TI

## 1. Visão Geral
Este projeto é um site institucional para uma empresa de Tecnologia da Informação (TI), com foco em suporte técnico, venda de softwares de gestão e soluções digitais.  
O objetivo é apresentar os serviços da empresa de forma profissional, responsiva e acessível.

## 2. Estrutura do Projeto
```
/ (raiz)
├── index.html       # Página inicial
├── sobre.html       # Página "Sobre"
├── servicos.html    # Página de serviços
├── contatos.html    # Página de contato
├── style.css        # Estilos globais
├── script.js        # Funcionalidades JavaScript
└── /img/            # Imagens do site
```

## 3. Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript
- **Design Responsivo:** Flexbox e Media Queries
- **Formulário de contato:** integração com API externa (ex.: Formspree)
- **Hospedagem:** compatível com qualquer servidor estático (GitHub Pages, Vercel, etc.)

## 4. Funcionalidades
- Menu responsivo com ícone hambúrguer (abre/fecha).
- Formulário de contato com:
  - Validação em tempo real dos campos.
  - Feedback de sucesso ou erro.
  - Botão com estado de "enviando".
- Layout totalmente responsivo (desktop, tablet e mobile).

## 5. Como Executar Localmente
1. Baixe ou clone o repositório.  
   ```bash
   git clone https://github.com/seuusuario/seuprojeto.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno.  
3. Para testar o formulário de contato, configure a URL de ação do formulário (`action` em `contatos.html`) para um serviço como [Formspree](https://formspree.io).  

## 6. Estrutura Visual (Design)
- **Paleta de cores:**
  - Verde principal: `#34b797`
  - Cinza claro: `#f3f1f1`
  - Branco e preto para contraste
- **Tipografia:** fontes padrão do sistema (pode ser adaptado com Google Fonts)
- **Componentes:** cards, botões com gradiente, header fixo, footer informativo

## 7. Como Atualizar Conteúdo
- **Textos:** editar os arquivos `.html` diretamente.  
- **Imagens:** substituir dentro da pasta `/img/`.  
- **Links:** alterar nas tags `<a href="...">`.  

## 8. Boas Práticas
- Manter nomes de arquivos simples (sem espaços ou acentos).  
- Otimizar imagens antes de enviar para o servidor.  
- Testar em diferentes tamanhos de tela após alterações.  

---
✍️ Documentação criada para auxiliar desenvolvedores e administradores do site.
