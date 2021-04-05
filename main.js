//Set Global Variables
const Numbers = document.querySelectorAll('.number');
const OperatorBtns = document.querySelectorAll('#operator');
const display = document.querySelector('#input');
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equalBtn = document.querySelector('.equalbtn');
const clearBtn = document.querySelector('.clearbtn');
const negBtn=document.querySelector('.negativebtn')

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let needScreenReset = false;


//Functions
function insertToDisplay(value) {
    if (display.textContent === '0' || needScreenReset) clearDisplay();
    //otherwise
    display.textContent += value;
}


function setOperation(operator) {
    if (currentOperation !== null) getResult();
    firstOperand = display.textContent;
    currentOperation = operator;
    needScreenReset = true;
}

function getResult() {
    if (currentOperation === null) return;
    if (currentOperation === '÷' && display.textContent === '0') {
        alert("Now you know you can't divide by 0!!😅");
        clearDisplay();
        return;
    }
    secondOperand = display.textContent;
    display.textContent = 
        roundResult(operate(currentOperation, firstOperand, secondOperand));
        currentOperation = null;
}

//roundResult rounds answer to 2 decimal places
function roundResult(value) {
    return Math.round(value * 100) / 100;
}

function clearDisplay() {
    display.textContent = '';
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    //converts values to numbers
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "÷":
            if (b === 0) return null;
            else return divide(a, b);
    }
}

function changeSign(){
    display.textContent = -Number(display.textContent);
}

//event listeners
clearBtn.addEventListener('click', clearDisplay);
equalBtn.addEventListener('click', getResult);
negBtn.addEventListener('click',changeSign);


Numbers.forEach((button)=>{
    button.addEventListener('click', (e)=>insertToDisplay(button.textContent));
});

OperatorBtns.forEach((button)=>{
    button.addEventListener('click',(e)=>setOperation(button.textContent));
});


