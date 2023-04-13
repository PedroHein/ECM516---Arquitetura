//1
const f = () => {
    console.log('f')
}
setTimeout(function (){ //A função setTimeout recebe uma função como argumento e a executa depois de um tempo determinado.
    f()
})
console.log("p")
//R: O script principal termina antes de a função agendada executar.

//2
var a = 2 //var é global e pode ser acessada de qualquer lugar do código.
var b = 2
let c = a + b //let é local e só pode ser acessada dentro do escopo onde foi declarada.
console.log(c) 
b = 3 //b é uma variável global e pode ser acessada de qualquer lugar do código.
console.log(c)
//R: Declara três variáveis.

//3
var nome
if (nome === undefined) { //A expressão nome === undefined é um teste que verifica se a variável nome foi inicializada.
    var nome = "Cristina"
}
console.log(nome)
//R: O resultado do teste realizado na linha 2 é true.

//4
const v = [100] 
console.log(v.length) //length é uma propriedade de um array que retorna o número de elementos do array.
v[2] = 5 //Atribui o valor 5 à posição 2 do array v.
console.log(v.length)
v = [5] //Atribui um novo valor ao array v.
console.log(v.length)
//R: A linha 5 causa um erro pois v é constante.

//5
let valores = [1, 2, 3, 4, 5] 
valores = valores.filter(v => v >= 3) //filter é um método de um array que retorna um novo array contendo apenas os elementos que satisfazem uma determinada condição.
console.log(valores.length)
const res = valores.reduce((ac, v) =>{ //reduce é um método de um array que retorna um único valor produzido a partir de uma coleção de valores.
    return ac + v //ac é o acumulador e v é o valor atual.
})
console.log(res)
//R: No exemplo, a função reduce produz um valor numérico em função da coleção chamada valores.
//R: A função filter devolve uma coleção.

//6
const f1 = () => { //f1 é uma função anônima.
    console.log('f1')
}
const f2 = () => { //f2 é uma função anônima.
    console.log('f2') 
    f() 
    return f 
}
f2(f1)() //f2 é uma função que recebe uma função como argumento e a executa.
//R: A linha 9 faz com que duas funções sejam colocadas em execução.

//7
//•I. ( ) => console.log('a') é uma arrow function válida. 
//•II. function f ( ) {console.log('a')} é uma arrow function válida.
//•III. Dependendo de sua lista de parâmetros, uma arrow function pode omitir os parênteses que a delimitam (a lista).

//R: I e III são verdadeiras.

//8
const nome = 'Pedro'
const idade = 22 
const pessoa = {nome, idade} 
console.log(pessoa.nome) //Acessa a propriedade nome do objeto pessoa.
console.log(pessoa['idade']) //Acessa a propriedade idade do objeto pessoa.
//R: A linha 3 define um objeto JSON válido. 
//R: As linhas 4 e 5 são exemplos de acesso a propriedades JSON válidos

//9
async function f1() { //async é uma palavra-chave que indica que a função é assíncrona.
    return 1
}
function f2(){
    return Promise.resolve(1) //resolve é um método de uma Promise que retorna uma Promise que é resolvida com o valor passado como argumento.
}
function f3(){
    return Promise.reject(1) //reject é um método de uma Promise que retorna uma Promise que é rejeitada com o valor passado como argumento.
}
async function teste(){ 
    try{
        const r1 = await f1() //await é uma palavra-chave que indica que a execução de uma função assíncrona deve ser pausada até que uma Promise seja resolvida ou rejeitada.
        console.log(r1) 
        const r2 = await f2()
        console.log(r2) 
        const r3 = await f3()
        console.log(r3)
    }
    catch (e){ //catch é um método de uma Promise que retorna uma Promise e trata os erros.
        console.log('e') 
    }
}
teste() 
//R: Depois da execução da linha 12, r1 passa a valer 1.
//R: A saída do programa inclui a letra "e".

//10
console.log (2 === '2') //analisa o valor e o tipo
console.log(2 == '2') //analisa apenas o valor
//R: A linha 2 faz coerção implícita.