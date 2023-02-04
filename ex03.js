//Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
//Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const ramdom1 = Math.floor(Math.random() * (10 - 1) + 1);
const ramdom2 = Math.floor(Math.random() * (10 - 1) + 1);

console.log(ramdom1);
console.log(ramdom2);

if (ramdom1 === ramdom2) {

  console.log(`YOU WIN`)
}

else { console.log(`YOU LOSE`) }

