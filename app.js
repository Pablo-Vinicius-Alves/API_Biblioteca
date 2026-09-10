async function carregarLivros(){
    const resposta = await fetch('http://localhost:3000/livros');
    const dados = await resposta.json();
    console.log(dados)
    const divLivros = document.getElementById('lista-livros');
    const listaHtml = dados.map(livro => {
        return `<p>${livro.nome} - ${livro.autor} - ${livro.status}</p>`;
    });
    divLivros.innerHTML = listaHtml.join('');
}

form.addEventListener('submit', );

carregarLivros();