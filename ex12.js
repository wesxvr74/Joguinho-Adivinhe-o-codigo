// Escreva um programa onde, você chame uma função mandando dois argumentos
// 2 números e a função responde qual número é maior

function biggerNumber(number1, number2) {
   if (number1 === number2) {
    console.log(`Os valores são iguais`); 
   } else {
    console.log(Math.max(number1,number2))
}
}

biggerNumber(257, 257)
