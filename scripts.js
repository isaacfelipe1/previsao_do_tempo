const key="bdde344475de3e327720d5405988f99a"

function colarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML="Tempo Em " + dados.name
    document.querySelector(".tempo").innerHTML=Math.floor( dados.main.temp) + "°c"
    document.querySelector(".texto-previsao").innerHTML=dados.weather[0].description
    document.querySelector(".umidade").innerHTML=dados.main.humidity + "%"
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
async function buscarCidade(cidade) {
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json())
    colarDadosNaTela(dados)
}
function cliqueiNoBotao() {
    const cidade= document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}