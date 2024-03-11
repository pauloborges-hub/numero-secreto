function validaChute(chute) {
    const numero = parseInt(chute);

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if(chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido! O número está entre ${menorValor} e ${maiorValor}</div>
        `;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}