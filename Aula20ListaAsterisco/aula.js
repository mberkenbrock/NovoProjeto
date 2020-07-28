//exite asteriscos com base na entrada da funcao.

const qtd = 10;
listaAsteriscos(qtd);

function listaAsteriscos(qtd){
    let valor = '';
    
    for(let i = 1; i<= qtd; i++)
    {   
        valor =+  '*';
        console.log(valor);
    }
}

