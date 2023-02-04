// Crie 5 objetos nesse formato{ nome: "" age,:"" sex:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo
// a pessoa deve ser maior de idade e brasileira para ser aprovada.

const people= [{
    name: `Wesley`, 
    age:`11` ,
    sex: `Male` ,
    profession: `Administrativo`,
    nacionality: `Brasilian`,
},

{   name: `Debs`,
    age:`41`,
    sex: `Female`,
    profession: `TeleMarketing`,
    nacionality: `Brasilian`,
},
{   name: `Diogao`,
    age:`15`,
    sex: `Male`,
    profession: `Programator`,
    nacionality: `Brasilian`,
},
{   name: `Antony`,
    age:`22`, 
    sex: `Male` ,
    profession: `Programator` ,
    nacionality: `Brasilian`,
},
{   name: `Marcos`, 
    idade:`24`,
    sexo: `Male`, 
    profissão: `technical support`, 
    nacionality: `Brasilian`,
}]

//Criando repetição.

for (let index = 0; index < people.length ; index++) {
    //Condicional
    if (people[index].age >= 18 && people[index].nacionality === "Brasilian") {
    console.log(`${people[index].name} passou no teste.`);
  } else {
    console.log(`${people[index].name} não passou no teste.`);
  }; 
    
}
