const list = [
{ name: `Rudolf`, vip: true },
{ name: `marye`, vip: false },
{ name: `anne`, vip: true },
{ name: `victu`, vip: true },
{ name: `antony`, vip: true },
{ name: `bruno`, vip: false },
{ name: `diogo`, vip: true },
{ name: `gustavo`, vip: false },
{ name: `julious`, vip: true },
{ name: `debs`, vip: false },
];

const sectory = list.filter( client => client.vip)

const companies = [ 
    { name: `Samsung`, marketValue: 500, CEO: `Kim Hyun Suk`, foundedOn: 1938 }, 
    { name: `Microsoft`, marketValue: 415, CEO: `Satya Natella`, foundedOn: 1975 }, 
    { name: `Intel`, marketValue: 500, CEO: `Brian Krzanich`, foundedOn: 1968 }, 
    { name: `Facebook`, marketValue: 383, CEO: `Mark Zuckerberg`, foundedOn: 2004 }, 
    { name: `spotify`, marketValue: 0, CEO: `Daniel Ek`, foundedOn: 2006 }, 
    { name: `Apple`, marketValue: 200, CEO: `Tim Cook`, foundedOn: 1976 } 
];

const founded = companies.filter(empresas  =>  empresas.foundedOn >= 1975 && empresas.marketValue > 200 ) 
    

