// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject) {
//         let res = 0;
//         for (let i = 1; i <= numero; i++) {
//             res += i;
//         }
//         resolve(1);
//     });
// }

// calculoDemorado(10).then( (resultado) => {
//     console.log(resultado)
// })


function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}
  
calculoRapidinho(10).then((resultado,a,v) => {
    console.log(resultado);
});
  
console.log('Esperando...');
  