//Escreva um programa onde, você chame uma função, e ela diga a hora exata!
//Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

function date() {
  const date = new Date().toLocaleTimeString();
  console.log(date);
}

function year() {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
}

date()
