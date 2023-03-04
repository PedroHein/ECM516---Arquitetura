// //declarando constantes
// //aspas simples e duplas dão na mesma
// const nome = 'José'
// const idade = 27, sexo = 'M'
// const endereco = "Rua K, 12"


// console.log(nome)
// console.log(idade, sexo)


// //declarando variaveis
// //let: variavel local, escopo de bloco
// let a = 2
// let b = 'abc'
// console.log(a, b)

// /*var: variavel global ou com escopo dentro da função onde foi criada*/
// var c = 2 + 3
// var d = "abcd"
// console.log(c, d)

// var x = 33
// if (a > 1) {
//     let x = 0
//     a = 10
//     console.log('Dentro da chave', x, a)
// }
// console.log('Fora da chave', x, a)

// //Com var, as variaveis podem ser redeclaradas

// var lig = 'JavaScript'
// console.log(lig)
// var lig = 'Java'
// console.log(lig)

// //Puxar a variavel dentro do console
// var year = 18
// var name = 'Joao'

// console.log(`Oi, ${name} tudo bem?`)

// const n1 = 2
// const n2 = '3'
// //Coerção implicita, concatena os numeros
// const n3 = n1 + n2
// console.log(n3)
// //Coerção explicita, soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)


// // == coerção implicita, compara apenas o que é
// // === coerção explicita, compara o que é e o tipo
// console.log(1 == 1) //True
// console.log(1 == "1") //True
// console.log(1 === 1) //True
// console.log(1 === "1") //False


// console.log(true == 2) //False
// console.log(true == 1) //True
// console.log(true == -1) //False
// console.log(false == 0) //True


// //declaração 
// v1 = []
// v1[0] = 3,4
// v1[10] = "abc"
// console.log(v1.lenght)
// console.log(v1)

// // inicializando na criação
// v2 = [2, "abc", true]
// console.log(v2)

// // iterando
// for(let i = 0; i < v2.length; i++ ){
//     console.log(v2[i])
// }

// // métodos utilitario dos vetores
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// //Filter
// const apenasComA = nomes.filter(n => n.startsWith("A"))
// console.log(apenasComA)

// //Map
// const res = nomes.map(nome => nome.charAt(0))
// console.log(res)

// //Every
// const todosComecamComA = nomes.every(n => n.startsWith("A"))
// console.log(todosComecamComA)

// //Reduce
// const valores = [1, 2, 3, 4, 5]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// //criação de funçoes
// function hello(){
//     console.log('Oi')
// }
// hello()

// function hello(nome){
//     console.log('Oi '+ nome)
// }
// hello('Pedro')

// function soma(a, b) {
//     return a + b    
// }
// const res = soma(2, 3)

// console.log(res)
// console.log(soma(2, 2))
// console.log(hello('Silva'))

// //funcoes anonimas
// const dobro = function(n){
//     return n + 2
// }

// const res = dobro(4)
// console.log(res)

// //valor default para parametro
// const triplo = function (n = 5){
//     return 3 * n
// }

// console.log(triplo())
// console.log(triplo(10))

// //arrow function
// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => valor * 2
// console.log(dobro(10))

// const triplo = valor => {
//     return valor * 3
// }

// console.log(triplo(10))

// const ehPar = n => {
//     return n % 2 === 0
// }
// console.log(ehPar(4))

//Closures

/*uma função pode ser atribuída a uma variável*/
// let umaFuncao = function () {
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()

/* f recebe uma função como parâmetro e, por isso, é
   uma função de alta ordem.
   Por devolver uma função, g também é de alta ordem */

//    function f (funcao){
//     //chamada da função
//     //note com a tipagem dinâmica tem seu preço
//     funcao()
// }

// function g() {
//     function outraFuncao(){
//         console.log("Fui criada por g")
//     }
//     return outraFuncao;
// }

//f pode ser chamada assim
//f(function() {
//    console.log("Estou sendo passada para f")
//})

//e g pode ser chamada assim
//const gResult = g()
//gResult()

//e assim também
//g()()

//outros testes
/** f chama g, que somente devolve uma função; 
 * nada é exibido */
//f(g)

/**f chama a função devolvida por g
 * "Fui criada por g" é exibido
 */
//f(g())

/**
 * f tenta chamar o que a função criada por g
 * devolve. Ela não devolve nada. Por isso,
 * um erro acontece - somente em tempo de execução
 */
//f(g()())

// //o que acontece?
// f(1)


