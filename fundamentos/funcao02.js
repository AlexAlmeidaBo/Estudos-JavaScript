// armazenadno uma função em variavel

const imprimirSoma = function(a = 0,b = 0){
    console.log(a+b)
}

imprimirSoma(2,3)

// armazenando uma função arrow em  uma variavel 

const soma = (a,b) =>{
    return a + b;
}

console.log(soma(5,5))

// retorno implicito
const subtracao = (a,b) => a - b;
console.log(subtracao(10,5))