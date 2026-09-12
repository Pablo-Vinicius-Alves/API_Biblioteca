const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let livros = [
    { id: 1, nome: "1984", autor: "George Orwell", status: "Fechado", paginas: 280 },
    { id: 2, nome: "Capeta Azul", autor: "Alex Ricardo", status: "Lendo", paginas: 401 }
];

let proximoId = 3;

app.get('/livros', (req, res) => {
    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    const livro = livros.find(li => li.id === Number(req.params.id));
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado.' });
    res.json(livro);
});

app.post('/livros', (req, res) => {
    const { nome, autor, status, paginas } = req.body;

    if (!nome || !autor) {
        return res.status(400).json({ erro: 'Título e autor são obrigatórios.' })
    }
    const novoLivro = {
        id: proximoId++,
        nome,
        autor,
        status: status || 'Pretendo ler',
        paginas: paginas || null
    };

    livros.push(novoLivro)
    res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === Number(req.params.id));
    if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });

    const { nome, autor, status, paginas} = req.body;
    if(nome) livro.nome = nome;
    if(autor) livro.autor = autor;
    if(status) livro.status = status;
    if(paginas) livro.paginas = paginas;

    res.json(livro);
});

app.delete('/livro/:id', (req, res) =>{
    const index = livros.findIndex(li => li.id === Number(req.params.id));
    if( index ===  -1) return res.status(404).json({ erro: 'Livro não encontrado '});

    livros.splice(index, 1);
    res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
