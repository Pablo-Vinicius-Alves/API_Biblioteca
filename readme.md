# 📚Biblioteca API
 
API REST simples para gerenciamento de uma biblioteca pessoal de livros, com front-end básico em HTML/CSS/JS consumindo os endpoints.
 
## Tecnologias
 
- Node.js
- Express
- CORS
- Armazenamento em memória

## Como rodar
 
```bash
npm install express cors
node src/server.js
```
 
O servidor sobe em `http://localhost:3000`.

## Endpoints
 
| Método | Rota          | Descrição                          |
|--------|---------------|-------------------------------------|
| GET    | `/livros`     | Lista todos os livros               |
| GET    | `/livros/:id` | Retorna um livro específico         |
| POST   | `/livros`     | Cria um novo livro                  |
| PUT    | `/livros/:id` | Atualiza um livro existente         |
| DELETE | `/livros/:id`  | Remove um livro                     |
