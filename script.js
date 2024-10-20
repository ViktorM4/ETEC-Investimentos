const nome = document.getElementById("nome");
const capital = document.getElementById("capital");
const juros = document.getElementById("juros");
const meses = document.getElementById("meses");

function calcularInvestimento() {
    let retorno = capital.value * ((1 + (juros.value / 100))** meses.value)
    let mensagem = nome.value + " seu retorno liquido é de: " + retorno.toFixed(2)
    alert(mensagem)

}