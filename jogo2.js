const Raizde4 =  document.getElementById("image")
const Numero2 =  document.getElementById("Number2")
const interrogacao = document.querySelector(".interrogacao")
const interrogacaoo = document.querySelector(".interrogacao1")
const mensagem = document.getElementById("mensagem")

let score = 0

document.getElementById("card").addEventListener("click" , function () {
  Raizde4.hidden = false
  interrogacao.hidden = true
  verificar()
})

document.getElementById("card2").addEventListener("click" , function () {
  Numero2.hidden = false 
  interrogacaoo.hidden = true
  verificar()
})

function verificar (){
  if(!Raizde4.hidden && !Numero2.hidden){
    console.log("eles se completam")
    score = score + 50
    document.getElementById("score").innerHTML = score
    console.log(score)
    
    setInterval(function(){
      Raizde4.hidden = true
      Numero2.hidden = true
    }, 2000)

  } 
}



