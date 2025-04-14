# Projeto Ouvidoria

Este repositório contém o **Projeto Ouvidoria**, uma aplicação web desenvolvida para facilitar o registro e a gestão de feedbacks, sugestões e reclamações de usuários.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML**: Estruturação das páginas web.
- **CSS**: Estilização e design da interface.
- **JavaScript**: Funcionalidades dinâmicas e interatividade.
- **Node.js**: Back-end para manipulação do servidor e APIs.
- **Servidor HTTP**: Configuração para gerenciar requisições e respostas.
- **SQLite**: Banco de dados leve para armazenar os registros.

## 📝 Funcionalidades

- Cadastro de feedbacks, sugestões e reclamações.
- Listagem de entradas já registradas.
- Exclusão de entradas específicas.
- Comunicação entre o front-end e o back-end utilizando APIs.
- Persistência de dados usando SQLite.

## 📂 Estrutura do Projeto

A estrutura principal do projeto é composta pelos seguintes arquivos e pastas:

- `index.html`: Página principal do projeto.
- `styles.css`: Arquivo de estilos para a aplicação.
- `script.js`: Arquivo JavaScript responsável pela lógica da aplicação.
- `server.js`: Arquivo principal do servidor Node.js para gerenciar a lógica de back-end.
- `package.json`: Gerenciamento de dependências e scripts.

## 🗄️ Banco de Dados SQLite

O projeto utiliza o **SQLite** como banco de dados para armazenar e gerenciar informações. O banco de dados é inicializado automaticamente ao executar o servidor.

### 📋 Estrutura do Banco de Dados

A tabela principal do banco de dados é:

- **Tabela `messages`**:
  - `nome` (TEXT): Nome da Pessoa
  - `email` (TEXT): Email da pessoa
  - `message` (TEXT): Conteúdo  
  - `dataAtual` (TEXT): Data e hora do registro.

### Configuração

O arquivo `database.sqlite` será criado automaticamente ao rodar o servidor pela primeira vez, caso não exista.

## 🎯 Como Executar o Projeto

1. Clone este repositório:
   git clone https://github.com/Fsilvestre88/ProjetoOuvidoria.git

2. Navegue até a pasta do projeto:
   cd ProjetoOuvidoria
   
4. Instale as dependências
   npm install
   
6. Inicie o servidor
   node server.js

7.Abra o navegador e acesse 
   http://localhost:3000

   

   
