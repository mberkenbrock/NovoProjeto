//ARROW FUNCTION

const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'},
    {id:3, nome: 'b'},
    {id:4, nome: 'c'},
    {id:5, nome: 'd'}
];

const marca = marcas.find(marca => marca.nome === 'a');

console.log(marca);


