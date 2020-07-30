//Objeto Postagem
//titulo
//mensagem
//autor
//visualizacoes
//comentarios (autor, mensagem)
//estaAoVivo

let Postagem = {
    titulo: 'Titulo',
    mensagem:  'Aqui a mensagem',
    autor:  'Nome Ator',
    visualizacoes: 1000,
    comentarios: [
        {autor: 'a', mensagem: 'aaaa'},
        {autor: 'b', mensagem: 'bbbb'}
    ],
    estaAoVivo: true,
}

console.log(Postagem);