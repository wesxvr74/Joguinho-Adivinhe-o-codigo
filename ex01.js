// Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

function num(number1, number2) {
    
const firstnumber= [number1,number2];

    if(firstnumber[0]>=firstnumber[1]){
        console.log(`O numero ${number1} é maior que ${number2}`)
    }    else {
        console.log(`O numero ${number1} é menor que ${number2} `)
    }
}
num(22,46)