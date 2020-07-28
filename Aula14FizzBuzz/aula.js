//FizzBuzz
//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 ou por 5 => FizzBuzz
//Não é Divisível por 3 ou 5 => Entrada
//Valor sem número => Não é um número

const resultado = fizzBuzz(10);
console.log(resultado);

function fizzBuzz(entrada) {
    logFizz = false;
    logBuzz = false;

    logFizz = entrada % 3 === 0 ? true : false;
    logBuzz = entrada % 5 === 0 ? true : false;

    if(typeof(entrada) !== 'number'){
        return 'Não é número';
    } 
    else{
        if(logFizz == false && logBuzz == false){
          return entrada;
        }
        else{
            if(logFizz == true && logBuzz == true){
                return 'FizzBuzz';
            }
            else{
                if(logFizz == true)
                    return 'Fizz';
                else
                    return 'Buzz';
            }
        }
    }
}