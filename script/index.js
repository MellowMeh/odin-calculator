let numbersContainer = document.querySelector('#numbersContainer');
let display = document.querySelector('#display');
let clearButton = document.querySelector('#clearButton');
let positiveNegativeButton = document.querySelector('#positiveNegativeButton');
let percentageButton = document.querySelector('#percentageButton');
let sevenButton = document.querySelector('#7');
let eightButton = document.querySelector('#8');
let nineButton = document.querySelector('#9');
let fourButton = document.querySelector('#4');
let fiveButton = document.querySelector('#5');
let sixButton = document.querySelector('#6');
let oneButton = document.querySelector('#1');
let twoButton = document.querySelector('#2');
let threeButton = document.querySelector('#3');
let zeroButton = document.querySelector('#0');
let decimalButton = document.querySelector('#decimalButton');
let divideButton = document.querySelector('#divideButton');
let multiplyButton = document.querySelector('#multiplyButton');
let subtractButton = document.querySelector('#subtractButton');
let addButton = document.querySelector('#addButton');
let equalButton = document.querySelector('#equalButton');


let numberOne;
let numberTwo;
let operator;

let divideNumbers = () => {
    result = numberOne / numberTwo;
    return result;
}

let multiplyNumbers = () => {
    result = numberOne * numberTwo;
    return result;
}

let addNumbers = () => {
    result = numberOne + numberTwo;
    return result;
}

let subtractNumbers = () => {
    result = numberOne - numberTwo;
    return result;
}

let setNumberOne = () => {
    target = event.target;
    if (!numberOne) {
        numberOne = target.id;
        display.value = numberOne;
        console.log(numberOne);
    } else {
        numberOne = numberOne.concat(target.id);
        display.value = numberOne;
        console.log(numberOne);
    }    
}

numbersContainer.addEventListener('click', setNumberOne);
