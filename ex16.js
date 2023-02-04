const list = [
{name: `Rudolf`, vip: true},
{name: `marye`, vip: false},
{name: `anne`, vip: true},
{name: `victu`, vip: true},
{name: `antony`, vip: true},
{name: `bruno`, vip: false},
{name: `diogo`, vip: true},
{name: `gustavo`, vip: false},
{name: `julious`, vip: true},
{name: `debs`, vip: false},
];

const sectory= list.map( client =>{
    const newList = {
        name: client.vip,
        vip: client.vip,
        sector: client.vip ? `Black` : `Green`,
        
    } 
    return newList
})

console.log(sectory);