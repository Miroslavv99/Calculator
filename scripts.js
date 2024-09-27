const numberButton = document.querySelectorAll('.key')
const operatorButton = document.querySelectorAll('.operate')
const drawButton = document.getElementById('draw')
const display = document.getElementById('display')
const reset = document.getElementById('reset')
const clear = document.getElementById('clear')
const del = document.getElementById('del')

function percentage (a, b) {
    return (b / 100) * a
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
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}


let num1 = '';
let num2 = '';
let operand = '';
let result = null;

function calculate(operator, num1, num2) {
    let a = parseFloat(num1)
    let b = parseFloat(num2)
    switch (operator) {
        case '%':
            return percentage(a, b)
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) {
                throw new Error("Error!");
            }
            return divide(a, b);
        default:
            throw new Error("Error!");
    }
}

numberButton.forEach(el => {
    el.addEventListener('click', () => {
        const value = el.value
         if(operand === '') {
             num1 += value
             display.textContent = num1
            
         } else {
            num2 += value
            display.textContent = num1 + ' ' + operand + ' ' + num2
         }
    })
})

operatorButton.forEach(el => {
    el.addEventListener('click', () => {
        const value = el.value
        if(num1 !== '') {
            operand = value
            display.textContent = num1 + ' ' + operand
        }
    })
})


drawButton.addEventListener('click', () => {
    if(num1 === '' || operand === '') {
        display.textContent = ''
        num1 = ''
        return
    }
    result = calculate(operand, num1, num2)
    display.textContent = result
    num1 = result
    num2 = ''
    operand = ''
})

reset.addEventListener('click', () => {
    display.textContent = ''
num1 = '';
num2 = '';
operand = '';
result = null;
})

clear.addEventListener('click', () => {
    display.textContent = '0'
    num1 = '';
    num2 = '';
    operand = '';
    result = null;
})

del.addEventListener('click', () => {
      if(operand === '') {
       num1 = num1.slice(0, -1)
       display.textContent = num1
} else if (num2 !== '') {
    num2 = num2.slice(0, -1)
    display.textContent = num1 + ' ' + operand + ' ' + num2
}
})