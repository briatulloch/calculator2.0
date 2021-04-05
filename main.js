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



//event listeners


Numbers.forEach((button)=>{
    button.addEventListener('click', (e)=>insertToDisplay(button.textContent));
});



