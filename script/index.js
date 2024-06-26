let numbersContainer = document.querySelector('#numbersContainer');
let display = document.querySelector('#display');
let clearButton = document.querySelector('#clearButton');
let positiveNegativeButton = document.querySelector('#positiveNegativeButton');
let percentageButton = document.querySelector('#percentageButton');
let sevenButton = document.querySelector('.sevenButton');
let eightButton = document.querySelector('.eightButton');
let nineButton = document.querySelector('.nineButton');
let fourButton = document.querySelector('.fourButton');
let fiveButton = document.querySelector('.fiveButton');
let sixButton = document.querySelector('.sixButton');
let oneButton = document.querySelector('.oneButton');
let twoButton = document.querySelector('.twoButton');
let threeButton = document.querySelector('.threeButton');
let zeroButton = document.querySelector('.zeroButton');
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
    if (!operator) {
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
}

//Thought process: the selection of the operator is the point at which pressing number buttons stops adding numbers to numberOne and starts to create numberTwo. So, if operator is not yet selected any button press goes to numberOne. If operator is selected, button presses go to numberTwo. BUT, you should only be able to select an operator only after numberOne has a value.

let setOperator = () => {
    target = event.target

    if (!numberOne) {
        display.value = 'Error';
    } else {
        switch(target.id) {
            case 'divideButton':
                console.log('divide button');
                break
        }
    }
}

numbersContainer.addEventListener('click', setNumberOne);
numbersContainer.addEventListener('touch', setNumberOne);
operatorsContainer.addEventListener('click', setOperator);