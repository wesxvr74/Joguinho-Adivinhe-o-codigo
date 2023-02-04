// Escreva um programa onde, você chame uma função enviando um número 
// Aceitar somente valores entre 1 e 10 e escrever a tabuada de 1 a 10 do valor lido.

function table(number) {
    if (number > 10 || number < 1 ) {
        return console.log(`Os parametros devem estar entre 1 e 10`);
    }
    for (let i = 0; i <= 10; i++) {
      console.log(number + ' x ' + i + ' = ' + (number * i));
    }
  }

  // Chamando a função
  table(3);