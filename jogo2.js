var cronometroElemento = document.getElementById('cronometro');
var iniciarBotao = document.getElementById('iniciar');
var pararBotao = document.getElementById('parar');
var reiniciarBotao = document.getElementById('reiniciar');

var cronometroID;
var segundos = 0;
var minutos = 0;
var horas = 0;

function atualizarCronometro() {
  segundos++;
  if (segundos >= 60) {
    segundos = 0;
    minutos++;
    if (minutos >= 60) {
      minutos = 0;
      horas++;
    }
  }

  var tempo = padZero(horas) + ':' + padZero(minutos) + ':' + padZero(segundos);
  cronometroElemento.textContent = tempo;
}

function iniciarCronometro() {
  cronometroID = setInterval(atualizarCronometro, 1000);
  iniciarBotao.disabled = true
  pararBotao.disabled = false;
}

function pararCronometro() {
  clearInterval(cronometroID);
  iniciarBotao.disabled = false;
  pararBotao.disabled = true;
}

function reiniciarCronometro() {
  clearInterval(cronometroID);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometroElemento.textContent = '00:00:00';
  iniciarBotao.disabled = false;
  pararBotao.disabled = true;
}

function padZero(numero) {
  return numero < 10 ? '0' + numero : numero;
}

iniciarBotao.addEventListener('click', iniciarCronometro);
pararBotao.addEventListener('click', pararCronometro);
reiniciarBotao.addEventListener('click', reiniciarCronometro);


