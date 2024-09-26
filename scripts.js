const numbers = document.querySelectorAll('.key')
const keys = document.querySelectorAll('.keys')
const draw = document.getElementById('draw')
const display = document.getElementById('display')



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
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}


let num1 = ''
let num2 = ''
let operate = ''
let result = null


