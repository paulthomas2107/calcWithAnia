const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let calculation = [];
let accumlativeCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.textContent = '.';
  } else if (value === '=') {
    const x = '' +  eval(accumlativeCalculation);
    screenDisplay.textContent = x.substring(0, 12);
  } else {
    calculation.push(value);
    accumlativeCalculation = calculation.join('');
    screenDisplay.textContent = accumlativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener('click', () => calculate(button))
);
