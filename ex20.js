// Exercicio Reduce

// const list = [1,2,3,4,5,6,7]

// const sum = list.reduce((acc, current) => acc + current, 0)

// console.log(sum);

const companies = [ 
    { name: `Samsung`, marketValue: 500, CEO: `Kim Hyun Suk`, foundedOn: 1938 }, 
    { name: `Microsoft`, marketValue: 500, CEO: `Satya Natella`, foundedOn: 1975 }, 
    { name: `Intel`, marketValue: 500, CEO: `Brian Krzanich`, foundedOn: 1968 }, 
    { name: `Facebook`, marketValue: 500, CEO: `Mark Zuckerberg`, foundedOn: 2004 }, 
    { name: `spotify`, marketValue: 500, CEO: `Daniel Ek`, foundedOn: 2006 }, 
    { name: `Apple`, marketValue: 500, CEO: `Tim Cook`, foundedOn: 1976 } 
];

const sum= companies.reduce((acc, {marketValue}) => acc + marketValue, 0)

console.log(sum);