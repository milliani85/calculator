const buttons = document.querySelector('.input-buttons-container');
const clearButton = document.querySelector('.clear-button');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');

let n1 = 0;
let n2 = 0;
let operator = '';
let result;


// Four basic math functions.

const add = function(n1, n2) {
    result =  n1 + n2;
    return result;
}

const subtract = function(n1, n2) {
    return n1 - n2;
}

const multiply = function(n1, n2) {
    return n1 * n2;
}

const divide = function(n1, n2) {
    return n1 / n2;
}


// Operator function.

const operate = function(n1, operator, n2) {

    if(operator === '+') {
        add(n1,n2);
    } else if(operator === '-') {
        subtract(n1,n2);
    } else if(operator === 'x') {
        multiply(n1,n2);
    } else if(operator === '/') {
        divide(n1,n2);
    }
}


// Update display one and store display in variables.

const updateDisplayOne = function(buttonChoice) {

    if(buttonChoice === '+' || buttonChoice === '-'
       || buttonChoice === 'x' || buttonChoice === '÷'){
            n1 = displayOne.innerText;
            n1 = +n1;
            operator = buttonChoice;
    }

    if(n1 > 0 && buttonChoice === '='){
        n2 = displayTwo.innerText;
        n2 = +n2;
    }        

    displayOne.innerText += buttonChoice;
}


// Update display two.

//displayTwo.innerText = 0;

const updateDisplayTwo = function(buttonChoice) {
    
    if(buttonChoice === '+' || buttonChoice === '-'
    || buttonChoice === 'x' || buttonChoice === '÷'){
        displayTwo.innerText = '';
 }

    if(!isNaN(buttonChoice)) {
    displayTwo.innerText += buttonChoice;
    }
    
    if(buttonChoice === '=') {
        operate(n1, operator, n2);
        displayTwo.innerText = result;
    }
}


// Clear display one.

clearButton.addEventListener('click', (e) => {
    location.reload();
})


// Select button.

buttons.addEventListener('click', (e) => {
   
    let buttonChoice;
    
    if(e.target.classList.contains('input')) {
        buttonChoice = e.target.innerText;
    } else {
        buttonChoice = '';    
    }
    
    updateDisplayOne(buttonChoice);
    updateDisplayTwo(buttonChoice);
})






