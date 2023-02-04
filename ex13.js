// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes. 
// coletando dados sobre o salário e número de filhos. 
// A prefeitura deseja saber: - média do salário da população 
// média do número de filhos; - maior salário; 
// O final da leitura de dados se dará com a entrada de um salário negativo. 
// Faça isso usando uma função!

const population = [{
    name: `joao`,
    wage: 2400.00,
    sons: `1`,
},
{
    name: `fefe`,
    wage: 3300.00,
    sons: `2`,
},
{
    name: `joaquina`,
    wage: 2400.00,
    sons: `1`,
},
{
    name: `fidelso`,
    wage: 3000.00,
    sons: `3`,
},
{
    name: `alemaozin`,
    wage: 2400.00,
    sons: `1`,
},
{
    name: `mariazinha`,
    wage: 4000.00,
    sons: `2`,
}]

function salarios() {

    let sum = 0

    population.forEach(element => { sum = element.wage; });
    let avg = sum / population.length;
    console.log(`Esta é a media de salarios: ${avg}`);
}

function filhos() {

    let s = 0
    population.forEach(element => { s = element.sons });
    let avg = s / population.length;
    console.log(`Esta é a media de filhos: ${avg}`)

}

function maior() {

    let sum = 0
    population.forEach(element => { sum = element.wage; });
    let avg = sum;

    console.log(`Este é o maior salarios: ${avg}`)
}

salarios()
filhos()
maior()