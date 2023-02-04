// Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
// Taxa de Juros = (Valor Final - Valor Inicial) 
// Valor Inicial x 100 / Período de Tempo (em anos)

function tax(initialvalue,finalValue,time) {
    
    const valueInvesting= initialvalue
    const balance= finalValue  
    const times= time

    let profit= (balance - valueInvesting)
    let tax= (profit / valueInvesting * 100)
    let taxDay= tax/times

    console.log(`${tax}% de lucro coletado`);
    console.log(`${taxDay}% ao dia`);
}

tax(5,7,30)