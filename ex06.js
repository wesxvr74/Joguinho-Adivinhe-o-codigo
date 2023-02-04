//Faça um programa onde leia um numero e diga se ele é par ou impar.
function ramdom() {
    
const number= [67,43, 97, 578, 69, 91, 78, 38];

    for (let i = 0; i < number.length; i++) {
  
        if (number[i] % 2 === 0){
            console.log(`${number[i]} é Par`);}
        else{
            console.log(`${number[i]} é Impar`);
        }
    }
}

ramdom()
