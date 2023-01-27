let valor // não inciado
console.log(valor);

valor = null // ausência de valor
console.log(valor);  
//console.log(valor.toString()) //valor 

const produto = {};

console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //Evitar atribuir undefined 
console.log(!!produto.preco);
console.log(produto);


produto.preco = null;
console.log(!!produto.preco);
console.log(produto)
//Optar pelo valor null ao inves de undefined para atribuir valor 0 