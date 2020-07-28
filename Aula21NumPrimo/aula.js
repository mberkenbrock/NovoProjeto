//Cria funcao mostrar numeros primos;

const numAtePrimos = 100;

retornaPrimos(numAtePrimos);

function retornaPrimos(qtd)
{

    for(let i = 1; i <= qtd;i++)
    {
        let primo = true;

        for(let divisor = 2; divisor < i; divisor ++)
        {
            if(i % divisor == 0){
                primo = false;
            }
        }

        if(primo == true)
            console.log(i);
    }
}