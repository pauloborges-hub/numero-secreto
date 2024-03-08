function validaChute(chute) {
    const numero = parseInt(chute);

    if(chuteInvalido(numero)) {
        console.log('Valor inválido!');
    }

    if(chuteMaiorOuMenor(numero)) {
        console.log(`Valor inválido! O numero está entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}