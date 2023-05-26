// Variables
let firstNum,
    secondNum,
    operator,
    currentValue,
    displayValue = '0',
    secondaryDisplay,
    previousOp,
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
    button.addEventListener('click', populateDisplay)
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
        case 'X': return multiply(num1, num2);
        case '÷': return divide(num1, num2);
    }
};

function populateDisplay() {
    numberDisplaySelector.textContent = displayValue;
}

// function setSecondDisplay() {
//     secondaryDisplay = `${displayValue} ${operator}`
// }

function populateSecondDisplay() {
    secondDisplaySelector.textContent = secondaryDisplay;
}

function updateValues() {
         
    currentNumArr.push(this.textContent);
    currentValue = currentNumArr.join('');
    displayValue = currentValue;
    console.log(`cv = ${currentValue}, fn = ${firstNum}`)
}

function setFirstNum() {
    
}

function calculate() {
    secondNum = currentValue;
    let result = String(operate(+firstNum, +secondNum, operator));
    displayValue = result
    populateDisplay()
    console.log(`res = ${result}, ${firstNum}, ${secondNum}, op = ${operator}`)
};

function deleteLastChar() {
    
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

function setOperator() {
    previousOp = operator;
    operator = this.textContent;
    console.log(operator)
}

function clearDisplayValue() {
    displayValue = '0'
}

function updateVariables() {
    if (firstNum === undefined && secondNum === undefined) {
        firstNum = currentValue;
        secondaryDisplay = `${currentValue} ${operator}`
        currentValue = '0';
        currentNumArr = [];
        console.log(`cv = ${currentValue}, ${firstNum}, ${secondNum} pt1`)
    } else {
    // else if (firstNum !== undefined && secondNum === undefined) {
    //     secondNum = currentValue;
    //     let result = String(operate(+firstNum, +secondNum, previousOp));
    //     console.log(result)
    //     secondaryDisplay = `${firstNum} ${previousOp} ${secondNum} ${operator} `
    //     firstNum = displayValue = result;
    //     currentValue = secondNum;
    //     currentNumArr = [];
    //     console.log(`cv = ${currentValue}, ${firstNum}, ${secondNum} pt2`)
    // } else {
        secondNum = currentValue;
        let result = String(operate(+firstNum, +secondNum, previousOp));
        console.log(result)
        secondaryDisplay = `${firstNum} ${previousOp} ${secondNum} ${operator} `
        firstNum = displayValue = result;
        currentValue = secondNum;
        currentNumArr = [];
        console.log(`result = ${result}`)
        console.log(`cv = ${currentValue}, ${firstNum}, ${secondNum} pt3`)
    }
}


function setPreviousOp() {
    if (!operator) previousOp = this.textContent;
    previousOp = operator;
}

