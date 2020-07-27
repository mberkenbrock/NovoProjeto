//Operadores Aritimeticos
//Operadores Atribuição
//Operadores de Comparação
//Operadores Lógicos
//Operadores Bitwise

//**********Operadores Atribuição************
let valorTeclado = 100;

valorTeclado += valorTeclado; //ele + ele
console.log(valorTeclado);

valorTeclado -= valorTeclado; //ele - ele
console.log(valorTeclado);

//**********Operadores de Comparação************
// Igualdade estrita
console.log( 1 === 1); //comparando além dos valores o tipo
console.log('1' === 1); //tipo diferente

//igualdade solta

console.log(1 === '1'); //Mais Recomendado
console.log(1 == '1');

//**********Operadores Ternário************
// Tem um cliente, 100 pontos = premium, senão comum.

let pontos = 100;
let tipo = pontos > 10 ? 'Premium' : 'Comum';
console.log(tipo);

//**********Operadores Lógicos************

console.log(true && true);
console.log(true && false); //AND
console.log(true || false); //OR
console.log(true && !false); //NOT !


//**********Operadores Não booleanos************
//Resultado de uma operação no JS = FALSY OU TRUESY

//FALSY
//UNDEFINED
//NULL
//0
//FALSE
//''
//NaN = NOT A NUMBER

//truthy
//1

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPadrao || corPersonalizada;

console.log

