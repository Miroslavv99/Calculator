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


let num1 = '';
let num2 = '';
let operand = '';
let result = null;

function operate(operator, num1, num2) {
    let a = parseFloat(num1)
    let b = parseFloat(num2)
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error("Error!");
            }
            return a / b;
        default:
            throw new Error("Error!");
    }
}

numbers.forEach(el => {
    const value = el.value
    el.addEventListener('click', () => {
        if(['-', '+', '/', '*'].includes(value)) {
            if(num1 !== '') {
            operand = value
            display.textContent += `${value}`
            }
        } else {
            if(operand === '') {
                num1 += value
                display.textContent += num1
            } else {
                num2 += value
                display.textContent += num2
            }
        }

    })
})


