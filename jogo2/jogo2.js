const Raizde4 =  document.getElementById("image")
const Numero2 =  document.getElementById("Number2")

let score = 0

document.getElementById("card").addEventListener("click" , function () {
  Raizde4.hidden = false
  document.getElementById("random").hidden = true
  verificar()
})

document.getElementById("card2").addEventListener("click" , function () {
  Numero2.hidden = false 
  verificar()
})

function verificar (){
  if(!Raizde4.hidden && !Numero2.hidden){
    console.log("eles se completam")
    score = score + 50
    document.getElementById("score").innerHTML = score

  } else {
    console.log("eles não se completam")
  }
}

