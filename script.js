const nomeDoInvestidor = document.getElementById("nomeDoInvestidor")
const capitalInicial = document.getElementById("capitalInicial")
const taxaDeJuros = document.getElementById("taxaDeJuros")
const numeroDeMeses = document.getElementById("numeroDeMeses")

function calcularInvestimento() {

    let valorCapitalInicial = parseFloat(capitalInicial.value);
    let valorNumeroDeMeses = parseInt(numeroDeMeses.value);
    let valorTaxaDeJuros = parseFloat(taxaDeJuros.value) / 100;
    let retorno = valorCapitalInicial * Math.pow(1 + valorTaxaDeJuros, valorNumeroDeMeses);
    let mensagem = nomeDoInvestidor.value+" seu retorno liquido é de: "+ retorno.toFixed(2)
    alert(mensagem)

}