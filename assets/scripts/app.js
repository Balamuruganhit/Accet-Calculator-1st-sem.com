const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



// Generates and writes calculation log
function createAndWriteOutput(calcNumber) {
  outputResult(calcNumber); // from vendor file
}




function A(a){
  if("o"==a){
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
  console.log(enteredNumber5);
  let sum=enteredNumber *3 +enteredNumber1 *4 +enteredNumber2 *4 +enteredNumber3 *4 +enteredNumber4 *1.5
  +enteredNumber *2;
  console.log(sum);
  let avg=sum/18.5;
  let m=avg.toFixed(2);
  console.log(m);
  createAndWriteOutput(m);
  
}


divideBtn.addEventListener('click', divide);
