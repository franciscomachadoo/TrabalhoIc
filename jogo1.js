
let variavel1 = Math.floor(Math.random()*20 )
let variavel2 = Math.floor(Math.random()*10 )

document.getElementById("numero1").textContent = variavel1
document.getElementById("numero2").textContent = variavel2

let Score = document.getElementById("score")
 
let ValorDoScore = 0
console.log(ValorDoScore)

let form = document.querySelector("#formulario");
let MensagemDeAcertoOuErro= document.querySelector("#Msgacertoerrou")


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  var input = document.querySelector("#resposta");
  var texto = input.value;
  console.log(texto); 

if (parseInt(texto) === variavel1 + variavel2) {
  MensagemDeAcertoOuErro.textContent= "acertou"
} 
else 
{
  MensagemDeAcertoOuErro.textContent= "errou, tente novamente"
}
setTimeout(function() { 
  MensagemDeAcertoOuErro.textContent= "";
    input.value = "";
}, 800)

let ValorDoSpan = MensagemDeAcertoOuErro.textContent

if (ValorDoSpan == "acertou") {
  setTimeout(function() {
    document.getElementById("numero1").textContent = "", 
    document.getElementById("numero2").textContent = ""
  },100)
  setTimeout(function() {
    variavel1 = Math.floor(Math.random()*20 )
    variavel2 = Math.floor(Math.random()*10 )
    document.getElementById("numero1").textContent =  variavel1
    document.getElementById("numero2").textContent =  variavel2
  },150)  
}

if (ValorDoSpan == "acertou") {
  ValorDoScore = ValorDoScore + 50
  Score.textContent = `score: ${ValorDoScore}`
 }
  


 function contador() {
  let contador = 0

  intervalor = setInterval(function() {

    contador = contador + 1
      document.getElementById("contador").innerHTML = contador
        if(contador === 60) {
        clearInterval(intervalor)
        document.getElementById("resposta").hidden = true
        document.getElementById("enviar").hidden = true
        document.getElementById("contador").innerHTML = "ACABOU!!"
      }
  }, 1000)
}
contador()
});












