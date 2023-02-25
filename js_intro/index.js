//declarando constantes
//aspas simples e duplas dão na mesma
const nome = 'José'
const idade = 27, sexo = 'M'
const endereco = "Rua K, 12"


console.log(nome)
console.log(idade, sexo)


//declarando variaveis
//let: variavel local, escopo de bloco
let a = 2
let b = 'abc'
console.log(a, b)

/*var: variavel global ou com escopo dentro da função onde foi criada*/
var c = 2 + 3
var d = "abcd"
console.log(c, d)

var x = 33
if (a > 1) {
    let x = 0
    a = 10
    console.log('Dentro da chave', x, a)
}
console.log('Fora da chave', x, a)

//Com var, as variaveis podem ser redeclaradas

var lig = 'JavaScript'
console.log(lig)
var lig = 'Java'
console.log(lig)

//Puxar a variavel dentro do console
var year = 18
var name = 'Joao'

console.log(`Oi, ${name} tudo bem?`)

const n1 = 2
const n2 = '3'
//Coerção implicita, concatena os numeros
const n3 = n1 + n2
console.log(n3)
//Coerção explicita, soma acontece
const n4 = n1 + Number(n2)
console.log(n4)


// == coerção implicita, compara apenas o que é
// === coerção explicita, compara o que é e o tipo
console.log(1 == 1) //True
console.log(1 == "1") //True
console.log(1 === 1) //True
console.log(1 === "1") //False


console.log(true == 2) //False
console.log(true == 1) //True
console.log(true == -1) //False
console.log(false == 0) //True


