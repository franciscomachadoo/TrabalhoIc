const firstRandomGeneratedNumber = Math.floor(Math.random() * 20);
const secondRandomGeneratedNumber = Math.floor(Math.random() * 20);

const form = document.getElementById('form');
const input = document.getElementById('input');

const firstNumberSpan = document.getElementById('firstNumberSpan');
const secondNumberSpan = document.getElementById('secondNumberSpan');

const resultSpan = document.getElementById('resultSpan');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  firstNumberSpan.textContent = firstRandomGeneratedNumber;
  secondNumberSpan.textContent = secondRandomGeneratedNumber;

  const inputValueNumber = parseInt(input.value);

    if (isNaN(inputValueNumber)) {
      resultSpan.textContent = 'Please enter a number';
      return;
    }

  const sumOfRandomGeneratedNumbers =
    firstRandomGeneratedNumber + secondRandomGeneratedNumber;

  if (inputValueNumber === sumOfRandomGeneratedNumbers) {
    resultSpan.textContent = 'Correct!';
  } else {
    resultSpan.textContent = 'Wrong!';
  }

  setTimeout(function () {
    resultSpan.textContent = '';
    input.value = '';
  }, 3000);
});