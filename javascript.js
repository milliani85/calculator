const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const equalsButton = document.querySelector('.equals-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');

let n1 = '';
let n2 = '';
let operator = ''


//Add number choice to bottom display.
numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
    inputNumber(e.target.innerText);
    })
})

function inputNumber(num) {
    n2 += num;
    n2 = +n2;
    displayTwo.innerText = n2;

    console.log(n1);
    console.log(n2);
    console.log(operator);
}



//Add operator choice and n2 to top display.
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        inputOperator(e.target.innerText)
    })
})

function inputOperator(op) {
    operator = op;
    displayOne.innerText = `${n2} ${operator}`;
    displayTwo.innerText = '';
    n1 = n2;
    n2 = '';

    console.log(n1);
    console.log(n2);
    console.log(operator);
}


//Runs calculate function when equals is pressed.
equalsButton.addEventListener('click', (e)=> {
    if(n1 !== '' && n2 !== '') {
        calculate();
    }
})

function calculate() {
    if(operator === ('+')) {
        n1 += n2;
    } else if(operator === ('-')) {
        n1 -= n2;
    } else if(operator === ('x')) {
        n1 *= n2;
    } else if(operator === ('÷')) {
        n1 /= n2;
    }
    displayTwo.innerText = n1;
    displayOne.innerText = '';
    n2 = n1;
    n1 = '';

    console.log(n1);
    console.log(n2);
    console.log(operator);
}



// Clear display.
clearButton.addEventListener('click', (e) => {
    location.reload();
})



// //Operator function for operator button choice.
// const operateTwo = function(n1, previousOperator, n2) {

//     if(previousOperator === '+') {
//         add(n1,n2);
//     } else if(previousOperator === '-') {
//         subtract(n1,n2);
//     } else if(previousOperator === 'x') {
//         multiply(n1,n2);
//     } else if(previousOperator === '÷') {
//         divide(n1,n2);
//     }
// }
    


// // Updates n1 and n2 variables.    
//     if(operator === undefined) {
//         n1 += buttonChoice;
//         n1 = +n1;
//     } else if (!isNaN(buttonChoice) && (displayOne.innerText.includes('+') || displayOne.innerText.includes('-') ||
//                displayOne.innerText.includes('x') || displayOne.innerText.includes('÷'))) {
                
//         n2 += buttonChoice;
//         n2 = +n2;
//     }
   


// // If equals has been pressed to run operator function, then move result to n1 and upper display when an operator is pressed.
//     if(displayOne.innerText.includes('=') && (buttonChoice === '+' ||
//        buttonChoice === '-' || buttonChoice === 'x' || buttonChoice === '÷')) {
//             n1 = result;
//             n2 = '';
//             displayOne.innerText = `${n1}${buttonChoice}`;
//     }
    


// // If n2 is empty and operator is pressed clear display 2.    
//     if(n2 === '' && (buttonChoice === '+' || buttonChoice === '-'
//     || buttonChoice === 'x' || buttonChoice === '÷')){
//         displayTwo.innerText = ''; 
//  // If display one shows an operator and n2 has a value, run operate function when second operator is pressed.       
//     } else if ((displayOne.innerText.includes('+') || displayOne.innerText.includes('-') ||
//         displayOne.innerText.includes('x') || displayOne.innerText.includes('÷')) && 
//         n2 !== '' && (buttonChoice === '+' || buttonChoice === '-' || buttonChoice === 'x' || buttonChoice === '÷')) {
//             operateTwo(n1, previousOperator, n2);
//             n1 = result;
//             displayOne.innerText = `${n1}${buttonChoice}`;
//             n2 = '';
//             displayTwo.innerText = result;
// }
 

// //Clears diplay two when a second operator is pressed.
//     const operatorCheck = displayOne.innerText[displayOne.innerText.length -2];
//     if(!isNaN(buttonChoice) && (operatorCheck === '+' || operatorCheck === '-' ||
//         operatorCheck === 'x' || operatorCheck === '÷' )) {
//             displayTwo.innerText = '';
//     }



// // If button choice is a number then add it to display 2.
//     if(!isNaN(buttonChoice)) {
//         displayTwo.innerText += buttonChoice;
//         }



// // If equals is pressed run operate function.  
//     if(buttonChoice === '=') {
//         operate(n1, operator, n2);
//         displayTwo.innerText = result;
//     }


 


//     console.log(n1)
//     console.log(n2)
//     console.log(operator)
//     console.log(previousOperator)
// }



    






// // Select button.

// buttons.addEventListener('click', (e) => {
   
//     let buttonChoice;
    
//     if(e.target.classList.contains('input')) {
//         buttonChoice = e.target.innerText;
//     } else {
//         buttonChoice = '';    
//     }
    
//     updateDisplayOne(buttonChoice);
//     //updateDisplayTwo(buttonChoice);
// })






