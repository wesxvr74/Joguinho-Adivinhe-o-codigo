// Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
// São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

function notas(number) {
    
    const note= number;

    switch (note) {
        case 0:
            console.log("Nota 0: Nenhum destaque, desempenho muito abaixo do esperado.");
            break;
        case 1:
            console.log("Nota 1: Desempenho muito abaixo do esperado.");
            break;
        case 2:
            console.log("Nota 2: Desempenho abaixo do esperado.");
            break;
        case 3:
            console.log("Nota 3: Desempenho ligeiramente abaixo do esperado.");
            break;
        case 4:
            console.log("Nota 4: Desempenho mediano.");
            break;
        case 5:
            console.log("Nota 5: Desempenho ligeiramente acima do esperado.");
            break;
        case 6:
            console.log("Nota 6: Desempenho acima do esperado.");
            break;
        case 7:
            console.log("Nota 7: Desempenho muito acima do esperado.");
            break;
        case 8:
            console.log("Nota 8: Excelente desempenho.");
            break;
        case 9:
            console.log("Nota 9: Desempenho excepcional.");
            break;
        case 10:
            console.log("Nota 10: Desempenho absolutamente excepcional.");
            break;
        default:
            break;
    }
}

notas(10)