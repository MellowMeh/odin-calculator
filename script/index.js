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
const acceptedValues = '0123456789';

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
            if (acceptedValues.includes(target.id)) {
                numberOne = target.id;
                display.value = numberOne;
                console.log('number one is ' + numberOne);
            }
        } else {
            if (acceptedValues.includes(target.id)) {
                numberOne = numberOne.concat(target.id);
                display.value = numberOne;
                console.log('number one is ' + numberOne);
            }
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
                operator = 'divide';
                console.log(operator);
                break
            case 'multiplyButton':
                operator = 'multiply';
                console.log(operator);
                break
            case 'subtractButton':
                operator = 'subtract';
                console.log(operator);
                break
            case 'addButton':
                operator = 'add';
                console.log(operator);
                break
        }
    }
}

let setNumberTwo = () => {
    target = event.target;
    if (operator) {
        if (!numberTwo) {
            if (acceptedValues.includes(target.id)) {
                numberTwo = target.id;
                display.value = numberTwo;
                console.log('number one is ' + numberTwo);
            }
        } else {
            if (acceptedValues.includes(target.id)) {
                numberTwo = numberTwo.concat(target.id);
                display.value = numberTwo;
                console.log('number two is ' + numberTwo);
            }
        }  
    }  
}

let getResult = () => {
    target = event.target;
    if (numberOne && numberTwo && operator) {
        let parsedNumberOne = parseFloat(numberOne);
        let parsedNumberTwo = parseFloat(numberTwo);
        console.log(parsedNumberOne);
        console.log(parsedNumberTwo);
        switch (operator) {
            case 'divide':
                result = parsedNumberOne/parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log(display.value);
                break
            case 'multiply':
                result = parsedNumberOne*parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log(display.value);
                break
            case 'subtract':
                result = parsedNumberOne-parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log(display.value);
                break
            case 'add':
                result = parsedNumberOne+parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log(display.value);
                break
        }
    } else {
        display.value = 'Error';
    }
}

numbersContainer.addEventListener('click', setNumberOne);
numbersContainer.addEventListener('touch', setNumberOne);
operatorsContainer.addEventListener('click', setOperator);
operatorsContainer.addEventListener('touch', setOperator);
numbersContainer.addEventListener('click', setNumberTwo);
numbersContainer.addEventListener('touch', setNumberTwo);
equalButton.addEventListener('click', getResult);
equalButton.addEventListener('touch', getResult);