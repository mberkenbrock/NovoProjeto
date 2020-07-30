//Js - Objeto Endereço

const endereco = {
    rua : 'Concordia',
    cidade :  'Joinville',
    cep : '89203600'
}

exibirEndereco(endereco);

function exibirEndereco(endereco)
{
    for(let chave in endereco)
    {
        console.log(endereco[chave]);
        console.log(chave,endereco[chave]);
    }
}