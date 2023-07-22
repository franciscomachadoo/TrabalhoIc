let numeros = []


for (let i = 0; i < 10; i++) {
    numeros.push(-10 + Math.floor(Math.random() * 30));
}

console.log(numeros)

let index = 0 

var intervalo = setInterval(function(){
    document.getElementById("mensagem").innerHTML = numeros[index]

    index = (index + 1) % numeros.length

    if (index === numeros.length - 1) {
        clearInterval(intervalo);
        document.getElementById("mensagem").innerHTML = ""
        
      }
}, 2000)

    



let numero1= numeros[0]
let numero2= numeros[1]
let numero3= numeros[2]
let numero4= numeros[3]
let numero5= numeros[4]
let numero6= numeros[5]
let numero7= numeros[6]
let numero8= numeros[7]

console.log(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8)




function randomizarArray(array) {
    const Tamanhoarray = array.length
    for (let i = Tamanhoarray - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

    
    }
    return array;
  }

const Tamanhomaximo = 6

let soma = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6, numero7 + numero8)

console.log(soma)

let Respostas = [

soma - 1,
soma - 2,
soma,
soma + 1,
soma + 2,
soma * -1

]

const RespostasNacaixa = randomizarArray(Respostas)
document.getElementById("caixa1").innerHTML = RespostasNacaixa[0]
document.getElementById("caixa2").innerHTML = RespostasNacaixa[1]
document.getElementById("caixa3").innerHTML = RespostasNacaixa[2]
document.getElementById("caixa4").innerHTML = RespostasNacaixa[3]
document.getElementById("caixa5").innerHTML = RespostasNacaixa[4]
document.getElementById("caixa6").innerHTML = RespostasNacaixa[5]


 document.getElementById("ErroOuAcerto").innerHTML 
  
  const arrayElementosB = document.getElementsByTagName("button");

  for (const elemento of arrayElementosB) {
    // Adicione um evento de clique (click) para cada botão
    elemento.addEventListener("click", function() {
      if (elemento.textContent === soma.toString()) {
        document.getElementById("ErroOuAcerto").innerHTML = "Acertou!"
      } else {
        document.getElementById("ErroOuAcerto").innerHTML = "Errou!"
      }
    });
  }