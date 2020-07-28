
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela  = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo Ligação...');
    }

}
const celular = new Celular('Asus',5.5,5000);
const novoCelular = Object.assign({
    bateria: 5000
},celular);

const obj2 = {...novoCelular};

console.log(novoCelular);
console.log(obj2);