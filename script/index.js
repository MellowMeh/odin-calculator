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

let setOperator = () => {
    target = event.target

    if (!numberOne) {
        display.value = display.value;
    } else if (!numberTwo) {
        switch(target.id) {
            case 'divideButton':
                operator = 'divide';
                console.log(operator);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'multiplyButton':
                operator = 'multiply';
                console.log(operator);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'subtractButton':
                operator = 'subtract';
                console.log(operator);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'addButton':
                operator = 'add';
                console.log(operator);
                document.getElementById('decimalButton').disabled=false;
                break
        }
    } else if (numberOne && numberTwo) {
        getResult();
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

let clearData = () => {
    display.value = '0';
    numberOne = '';
    numberTwo = '';
    operator = '';
    console.log(numberOne);
    console.log(numberTwo);
    console.log(operator);
}

let setNegative = () => {
    if (!operator) {
        if (Math.sign(numberOne) === 1) {
            numberOne = '-' + numberOne;
            display.value = numberOne;
            console.log(numberOne);
        } else if (Math.sign(numberOne) === -1) {
            numberOne = numberOne.slice(1);
            display.value = numberOne;
            console.log(numberOne);
        } else {
            numberOne = '-';
            display.value = numberOne;
            console.log(numberOne);
        }
    } else {
        if (Math.sign(numberTwo) === 1) {
            numberTwo = '-' + numberTwo;
            display.value = numberTwo;
            console.log(numberTwo);
        } else if (Math.sign(numberTwo) === -1) {
            numberTwo = numberTwo.slice(1);
            display.value = numberTwo;
            console.log(numberTwo);
        } else {
            numberTwo = '-';
            display.value = numberTwo;
            console.log(numberTwo);
        }
    }
}

let setPercentage = () => {
    if (!operator) {
            numberOne = numberOne/100;
            numberOne = Math.round(numberOne*100000000)/100000000;
            display.value = numberOne;
            console.log(numberOne);
    } else {
            numberTwo = numberTwo/100;
            numberTwo = Math.round(numberTwo*100000000)/100000000;
            display.value = numberTwo;
            console.log(numberTwo);
    }
}

let addDecimal = () => {
    if (!numberOne && !numberTwo) {
        numberOne = '';
        numberOne += '0.';
        console.log(numberOne);
        display.value = numberOne;
        document.getElementById('decimalButton').disabled=true;
    } else if (numberOne && !numberTwo && !operator) {
        numberOne = numberOne + '.';
        console.log(numberOne);
        display.value = numberOne;
        document.getElementById('decimalButton').disabled=true;
    } else if (numberOne && !numberTwo && operator) {
        numberTwo = '';
        numberTwo += '0.';
        console.log(numberTwo);
        display.value = numberTwo;
        document.getElementById('decimalButton').disabled=true;
    } else if (numberOne && numberTwo) {
        numberTwo = numberTwo + '.';
        console.log(numberTwo);
        display.value = numberTwo;
        document.getElementById('decimalButton').disabled=true;
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
                console.log('rounded result = ' + roundedResult);
                numberTwo = '';
                console.log('number two is ' + numberTwo);
                operator = '';
                console.log('operator is ' + operator);
                numberOne = roundedResult;
                console.log('number one is ' + numberOne);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'multiply':
                result = parsedNumberOne*parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log('rounded result = ' + roundedResult);
                numberTwo = '';
                console.log('number two is ' + numberTwo);
                operator = '';
                console.log('operator is ' + operator);
                numberOne = roundedResult;
                console.log('number one is ' + numberOne);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'subtract':
                result = parsedNumberOne-parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log('rounded result = ' + roundedResult);
                numberTwo = '';
                console.log('number two is ' + numberTwo);
                operator = '';
                console.log('operator is ' + operator);
                numberOne = roundedResult;
                console.log('number one is ' + numberOne);
                document.getElementById('decimalButton').disabled=false;
                break
            case 'add':
                result = parsedNumberOne+parsedNumberTwo;
                roundedResult = Math.round(result*10000)/10000;
                display.value = roundedResult;
                console.log('rounded result = ' + roundedResult);
                numberTwo = '';
                console.log('number two is ' + numberTwo);
                operator = '';
                console.log('operator is ' + operator);
                numberOne = roundedResult;
                console.log('number one is ' + numberOne);
                document.getElementById('decimalButton').disabled=false;
                break
        }
    } else {
        display.value = display.value;
    }
}



numbersContainer.addEventListener('click', setNumberOne);
numbersContainer.addEventListener('touch', setNumberOne);
operatorsContainer.addEventListener('mouseup', setOperator);
operatorsContainer.addEventListener('touchend', setOperator);
numbersContainer.addEventListener('click', setNumberTwo);
numbersContainer.addEventListener('touch', setNumberTwo);
operatorsContainer.addEventListener('mousedown', getResult);
operatorsContainer.addEventListener('touchstart', getResult);
clearButton.addEventListener('click', clearData);
clearButton.addEventListener('touch', clearData);
positiveNegativeButton.addEventListener('click', setNegative);
positiveNegativeButton.addEventListener('touch', setNegative);
decimalButton.addEventListener('click', addDecimal);
decimalButton.addEventListener('touch', addDecimal);
percentageButton.addEventListener('click', setPercentage);
percentageButton.addEventListener('touch', setPercentage);