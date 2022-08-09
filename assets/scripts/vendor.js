const usrInput = document.getElementById('input-number');
const usrInput1 = document.getElementById('input-number1');
const usrInput2 = document.getElementById('input-number2');
const usrInput3 = document.getElementById('input-number3');
const usrInput4 = document.getElementById('input-number4');
const usrInput5= document.getElementById('input-number5');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result) {
  currentResultOutput.textContent = result;
  
}
