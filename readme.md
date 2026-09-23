# 📚Biblioteca API
 
API REST simples para gerenciamento de uma biblioteca pessoal de livros, com front-end básico em HTML/CSS/JS consumindo os endpoints.
 
## Funcionalidades
 
- Cadastrar novos livros (título, autor, páginas e status)
- Listar livros separados por status: **Pretendo ler**, **Lendo** e **Finalizado**
- Atualizar informações de um livro existente
- Remover livros da coleção
- Interface web simples, sem necessidade de recarregar a página (via `fetch`)

## 🛠️ Tecnologias
 
**Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

**Frontend**
- HTML5
- CSS3
- JavaScript puro, consumindo a API via `fetch`
> Os dados são armazenados em memória (array no servidor) — ou seja, são reiniciados sempre que o servidor é reiniciado. Não há banco de dados AINDA.

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

---

## 🗺️ Próximos passos
 
- [ ] Persistência de dados com banco de dados (ex: PostgreSQL, MySQL)
- [ ] Botão de editar livro na interface
- [ ] Validação de campos no frontend antes do envio
- [ ] Feedback visual de erros (hoje a API retorna erro, mas a tela não avisa o usuário)
- [ ] Paginação/busca de livros
---
##  Autor
 
Pablo Alves