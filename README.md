# Taskapp

Aplicação de gerenciamento de tarefas desenvolvida em Node.js e PostgreSQL, que fornece uma API pública para manipulação de tarefas (CRUD) sem autenticação.

## Funcionalidades

- Criação de Tarefas
- Listagem de Tarefas
- Edição de Tarefas
- Exclusão de Tarefas

## Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- Knex CLI para migrações

## Configuração do Projeto

1. Clone o repositório:
 
   ```bash
     git clone https://github.com/jpvinhas/taskapp.git
     cd taskapp
   ```
2. Instale as Dependências

   ```bash
     npm install
   ```

3. Configuração do Banco de Dados
   Certifique-se de que o PostgreSQL está instalado. Clone o repositório do backend:
    ```bash
    cd ..  
    git clone https://github.com/jpvinhas/toDo-backend.git
    cd toDo-backend
    ```
4. Instale as Dependências

   ```bash
     npm install
   ```

5. Execute o backend

   ```bash
     npm start
   ```

6. Execute o app

   ```bash
     cd ../taskapp
     npm start
   ```
