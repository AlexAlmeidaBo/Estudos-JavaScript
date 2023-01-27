const notas = [10,8,5,3,2]
for (let i in notas){
    console.log(i , notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 21,
    peso: 61,
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

