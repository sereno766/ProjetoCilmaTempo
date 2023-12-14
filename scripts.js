

document.addEventListener("keydown", EnterInput);

const chave = "aba451c15b85f275d40fd61d3728970c";

document.addEventListener("keydown", EnterInput);

function colocarDadosNaTela(dados) {
console.log(dados)
    document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
    document.querySelector(".status").innerHTML = dados.weather[0].description
    document.querySelector(".temperatura").innerHTML =Math.floor (dados.main.temp) + "°C"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "°C"
    document.querySelector(".imagem-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)

}


function CliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    BuscarCidade(cidade)
}

function EnterInput(event) {
    if (event.key === "Enter") {
        const cidade = document.querySelector(".input-cidade").value

        BuscarCidade(cidade)
    }

}
