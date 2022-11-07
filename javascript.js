const buttons = document.querySelector('.input-buttons-container');
const displayOne = document.querySelector('.display-one');



// Four basic math functions.

const add = function(n1, n2) {
    return n1 + n2;
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


// Function to update display.

const updateDisplay = function(buttonChoice) {
    displayOne.innerText += buttonChoice;

}


// Select button.

buttons.addEventListener('click', (e) => {
   
    let buttonChoice;
    
    if(e.target.classList.contains('input')) {
        buttonChoice = e.target.innerText;
    } else {
        buttonChoice = '';    
    }
    
    updateDisplay(buttonChoice);
})

