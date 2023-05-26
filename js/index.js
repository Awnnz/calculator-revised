// Variables
let firstNum,
    secondNum,
    operator,
    currentValue,
    displayValue = '0',
    secondaryDisplay,
    previousOp,
    previousNum,
    currentNumArr = [];

// Selectors
let numberDisplaySelector = document.querySelector('.numberDisplay');
let secondDisplaySelector = document.querySelector('.second-display');
let buttonsSelector = document.querySelectorAll('.button');
let nummberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('.equal');
let deleteButton = document.querySelector('.del-btn');
let clearButton = document.querySelector('.clear-btn');


// Main
nummberButtons.forEach(button => {
    button.addEventListener('click', updateValues)
})

operatorButtons.forEach(button => {
    button.addEventListener('click', setPreviousOp)
    button.addEventListener('click', setOperator)
    button.addEventListener('click', updateVariables)
    button.addEventListener('click', populateDisplay)
    button.addEventListener('click', populateSecondDisplay)
})

equalButton.addEventListener('click', calculate)

clearButton.addEventListener('click', clear)

deleteButton.addEventListener('click', deleteLastChar)

// Styling
buttonsSelector.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.backgroundColor = 'darkgrey'
    })

    button.addEventListener('mouseup', () => {
        button.style.backgroundColor = 'white'
    })

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'grey'
    })

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'white'
    })
});

// Functions

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case 'x': return multiply(num1, num2);
        case '÷': return divide(num1, num2);
    }
};

function populateDisplay() {
    numberDisplaySelector.textContent = displayValue;
}

function populateSecondDisplay() {
    secondDisplaySelector.textContent = secondaryDisplay;
}

function updateValues() {
    if (currentNumArr.length >= 25) return;
    let decimalChecker = currentNumArr.some(index => index === '.');
    if (decimalChecker && this.textContent === '.') return;
    currentNumArr.push(this.textContent);
    currentValue = currentNumArr.join('');
    displayValue = currentValue;
    populateDisplay();
}

function calculate() {
    if (firstNum === undefined || operator === undefined) return;
    secondNum = currentValue;
    if (secondNum === '0' && operator === '÷') {
        displayValue = `'Please don't h-h-h-hurt me`;
        populateDisplay();
        return;
    }
    if (secondNum || secondNum === '0') lastNum = secondNum;
    secondNum = lastNum;
    let result = String(Math.round((operate(+firstNum, +secondNum, operator) * 100)) / 100);
    displayValue = result;
    console.log(typeof displayValue)
    secondaryDisplay = `${firstNum} ${operator} ${secondNum} = `
    firstNum = result;
    currentValue = '';
    currentNumArr = [];
    populateDisplay();
    populateSecondDisplay();
};

function deleteLastChar() {
    currentNumArr.pop();
    if (currentNumArr.length == 0) currentNumArr = [0];
    displayValue = currentNumArr.join('');
    populateDisplay();
    if (currentNumArr.length === 1 && currentNumArr[0] === 0) currentNumArr = [];
}

function clear() {
    firstNum = undefined,
    secondNum = undefined,
    operator = undefined,
    currentValue = '0',
    displayValue = '0',
    secondaryDisplay = '',
    currentNumArr = [];
    populateDisplay()
    populateSecondDisplay()
}

function updateVariables() {
    if (firstNum === undefined && secondNum === undefined) {
        firstNum = currentValue;
        secondaryDisplay = `${currentValue} ${operator}`
        currentValue = '0';
        currentNumArr = [];
    } else {
        if (!currentValue) {
            secondaryDisplay = `${firstNum} ${operator} `
            return;
        }
        secondNum = currentValue;
        let result = String(Math.round(operate(+firstNum, +secondNum, previousOp) * 100) / 100); 
        secondaryDisplay = `${firstNum} ${previousOp} ${secondNum} ${operator} `
        firstNum = displayValue = result;
        currentValue = '';
        currentNumArr = [];
    }
}

function setOperator() {
    previousOp = operator;
    operator = this.textContent;
    if (operator === 'X') operator = operator.toLowerCase();
}

function setPreviousOp() {
    if (!operator) previousOp = this.textContent;
    previousOp = operator;
    if (operator === 'X') operator = operator.toLowerCase();
}

