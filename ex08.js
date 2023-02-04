// Faça um programa onde leia um número e diga se ele é: - ímpar, - par, 
// É um número primo e impar, - é par e divisível por 5.

//função par ou impar
function odd(number) {
    
    if (number % 2 === 0) {
        console.log(`${number} é par`);
    } else {
        console.log(`${number} é impar`);
    }
}

odd(564481656)

function Prime (number) {
    if (number % 2 === 0) {
        return true 
    } else {
        return false
    }
}

//função que confere SE o numero é divisivel por 5
