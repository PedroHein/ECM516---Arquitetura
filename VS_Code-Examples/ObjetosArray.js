// Objetos 
let objeto = {
    "a": "ameixa",
    "b": "banana",
    "c": "cereja"
}
console.log(objeto.a) // ameixa
console.log(objeto) // { a: 'ameixa', b: 'banana', c: 'cereja' }

// Array   
let lista = ['a', 'b', 'c']
console.log(lista[0]) // a

lista.push('d') // Adiciona um elemento no final do array
lista.pop() // Remove o último elemento do array
lista.indexOf('b') // Retorna o índice do elemento passado como parâmetro

console.log(lista.push('d')) // 4
console.log(lista.pop()) // d
console.log(lista.indexOf('b')) // 1