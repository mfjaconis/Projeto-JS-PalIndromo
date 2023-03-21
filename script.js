// Escreva um programa que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente) e exiba a mensagem no console.


function palindromo() {
    let palavra = document.getElementById("palavra").value.toLowerCase()
    let resultado = document.getElementById("resultado")

    let inversoPalavra = palavra.toLowerCase().split('').reverse().join('');

    if (palavra == inversoPalavra){
        resultado.innerHTML = `A palavra <b>${palavra.toUpperCase()}</b> é um palíndromo.`
    } else {
        resultado.innerHTML = `A palavra <b>${palavra.toUpperCase()}</b> não é um palíndromo.`
    }

}
