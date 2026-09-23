const form = document.getElementById('form-livro');

async function carregarLivros() {
    const resposta = await fetch('http://localhost:3000/livros');
    const dados = await resposta.json();

    const listas = {
        'Pretendo ler': document.getElementById('lista-pretendo'),
        'Lendo': document.getElementById('lista-lendo'),
        'Finalizado': document.getElementById('lista-finalizado')
    };

    Object.values(listas).forEach(div => div.innerHTML = '');

    dados.forEach(livro => {
        const div = listas[livro.status];
        if (div) {
            div.innerHTML += `<p>${livro.nome} - ${livro.autor} (${livro.paginas} pág.)</p>`;
        }
    });
}

async function adicionarLivro(evento) {
    evento.preventDefault(); 

    const formData = new FormData(form);
    const novoLivro = Object.fromEntries(formData);

    await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoLivro)
    });

    form.reset();
    carregarLivros(); 
}

form.addEventListener('submit', adicionarLivro);

carregarLivros();