const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



// Generates and writes calculation log
function createAndWriteOutput(calcNumber) {
  outputResult(calcNumber); // from vendor file
}




function A(a){
  if("O"==a){
    return 10;
  } else if("A+"==a){
    return 9;
  } else if("A"==a){
    return 8;
  } else if("B+"==a){
    return 7;
  } else if("B"==a){
    return 6;
  } else if("C"==a){
    return 5;
  } 
    else if("o"==a){
    return 10;
  } else if("a+"==a){
    return 9;
  } else if("a"==a){
    return 8;
  } else if("b+"==a){
    return 7;
  } else if("b"==a){
    return 6;
  } else if("c"==a){
    return 5;
  } 
};



function divide() {
  const enteredNumber = A(usrInput.value);
  const enteredNumber1= A(usrInput1.value);
  console.log(enteredNumber);
  console.log(usrInput1);
  console.log(enteredNumber1);
  const enteredNumber2 = A(usrInput2.value);
  console.log(enteredNumber2);
  const enteredNumber3 = A(usrInput3.value);
  console.log(enteredNumber3);
  const enteredNumber4 = A(usrInput4.value);
  console.log(enteredNumber4);
  const enteredNumber5 = A(usrInput5.value);
  const enteredNumber6=A(useInput6.value);
  console.log(enteredNumber5);
  let sum=enteredNumber *4+enteredNumber1 *4 +enteredNumber2 *3+enteredNumber3 *3 +enteredNumber4 *3
  +enteredNumber5 *1.5 +enteredNumber6*1.5;
  let avg=sum/19;
  let m=avg.toFixed(2);
  createAndWriteOutput(m);
  
}


divideBtn.addEventListener('click', divide);
