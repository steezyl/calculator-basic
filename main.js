//Document query finders
const allButtons = document.querySelectorAll('button');
const userInputDisplay = document.querySelector('.input');
const calculatedResult = document.querySelector('.calc-results');
const resetButton = document.querySelector('#reset');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operate-button');
const enterButton = document.querySelector('#enter');
const dotButton = document.querySelector('#dot');
const braketOpenButton = document.querySelector('#bracket-open');
const braketCloseButton = document.querySelector('#bracket-close');

// Set pararmeters - will move these to the reset function also
let a = '';
let b = '';
let operator = '';
userInputDisplay.textContent = '';
calculatedResult.textContent = '';

// Operator functions
function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return (b==0 ? 'ERROR Cannot divide by zero' : a/b);
};

// Operate function
function operate(a,b,operator) {
    switch(operator) {
        case 'multiply':
            result = multiply(a,b);
            break;
        case 'divide':
            result = divide(a,b).toFixed(3);
            break;
        case 'add':
            result = add(a,b);
            break;
        case 'subtract':
            result = subtract(a,b);
        }
    return result;
}


function checkAction() {
    const type = this.classList[0];
    if (type === 'number-button'  && !operator) {
        a = Number("" + a + (this.id[0]));
        userInputDisplay.textContent = `${a}`;
    }
    else if (type === 'operate-button') {
        operator = this.id;
        console.log(operator);
        textOperator = document.getElementById(operator).innerHTML;
        a == '' 
        ? userInputDisplay.textContent = `${a}`
        : userInputDisplay.textContent = `${a} ${textOperator}`
    }
    else if (type ==='number-button') {
        b = Number("" + b + (this.id[0]));
        result = operate(a,b,operator);
        userInputDisplay.textContent = `${a} ${textOperator} ${b} = `;
        calculatedResult.textContent = `${result}`;
    }
    else if (type === 'enter') {
        a = operate(a,b,operator);
        b = '';
        operator = '';
        calculatedResult.textContent = ''
        userInputDisplay.textContent = `${a} ${operator} ${b} `;
    }
    else if (type === 'reset') {
        userInputDisplay.textContent = '';
        calculatedResult.textContent = '';
        a = '';
        b = '';
        operator = '';
    }
    else {
        userInputDisplay.textContent = 'There is an error with type';
    }
    return operator
}


// Initial Event Listener 
allButtons.forEach(button => button.addEventListener('click', checkAction));