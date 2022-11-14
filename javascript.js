const buttons = document.querySelector('.input-buttons-container');
const clearButton = document.querySelector('.clear-button');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');

let n1;
let n2;
let operator = '';
let result;


// Four basic math functions.

const add = function(n1, n2) {
    result =  n1 + n2;
    return result;
}

const subtract = function(n1, n2) {
    result = n1 - n2;
    return result;
}

const multiply = function(n1, n2) {
    result = n1 * n2;
    return result;
}

const divide = function(n1, n2) {
    result = n1 / n2;
    return result;
}


// Operator function.

const operate = function(n1, operator, n2) {

    if(operator === '+') {
        add(n1,n2);
    } else if(operator === '-') {
        subtract(n1,n2);
    } else if(operator === 'x') {
        multiply(n1,n2);
    } else if(operator === '÷') {
        divide(n1,n2);
    }
}


// Update display one and store display in variables.

const updateDisplayOne = function(buttonChoice) {

//If operator is pressed then assign it to operator variable and display one text to n1 variable.
    if(buttonChoice === '+' || buttonChoice === '-'
       || buttonChoice === 'x' || buttonChoice === '÷'){
            n1 = displayOne.innerText;
            n1 = +n1;
            operator = buttonChoice;
    }


    displayOne.innerText += buttonChoice;


//If equals has been pressed to run operator function, then move result to n1 and upper display when an operator is pressed.
    if(displayOne.innerText.includes('=') && (buttonChoice === '+' ||
       buttonChoice === '-' || buttonChoice === 'x' || buttonChoice === '÷')) {
            n1 = result;
            displayOne.innerText = `${n1}${buttonChoice}`;
    }
}
//
if(displayOne.innerText.includes('=') && (buttonChoice === '+' ||
       buttonChoice === '-' || buttonChoice === 'x' || buttonChoice === '÷')) {
            n1 = result;
            displayOne.innerText = `${n1}${buttonChoice}`;
    }

// Update display two.

// displayTwo.innerText = 0;

const updateDisplayTwo = function(buttonChoice) {


//Clears display 2 when an operator is pressed.
    if(buttonChoice === '+' || buttonChoice === '-'
    || buttonChoice === 'x' || buttonChoice === '÷'){
        displayTwo.innerText = '';
 }


 // If button choice is a number then add it to display 2 and store in n2. n2 moves to n1 when an operator is pressed.
    
 if(!isNaN(buttonChoice)) {
    displayTwo.innerText += buttonChoice;
    n2 = displayTwo.innerText
    n2 = +n2;
    }
    

 // If equals is pressed run operate function.   
    if(buttonChoice === '=') {
        operate(n1, operator, n2);
        displayTwo.innerText = result;
    }
console.log(n1)
console.log(n2)
console.log(operator)

    //
    // if(displayOne.innerText.includes('+') && n2 !== null) {
    //     // operate(n1, operator, n2);
    //     console.log('hello')
    //     // displayTwo.innerText = result;
    //}
    
}


// Clear display.

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






