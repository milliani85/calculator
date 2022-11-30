const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const equalsButton = document.querySelector('.equals-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const displayOne = document.querySelector('.display-one');
const displayTwo = document.querySelector('.display-two');
const decimalButton = document.querySelector('.decimal-button')

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
    if(n2.toString().length < 12) {
        n2 += num;
        n2 = +n2;
        displayTwo.innerText = n2;
    }
}



//Add operator choice and n2 to top display.
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(n1 === '') {
            inputOperator(e.target.innerText)
        } else if (n1 !== '' && n2 !== '') {
            calculate();
            secondOperator(e.target.innerText)
        }
    })
})

function inputOperator(op) {
    operator = op;
    displayOne.innerText = `${n2} ${operator}`;
    displayTwo.innerText = '';
    n1 = n2;
    n2 = '';
}

function secondOperator(op) {
    n1 = n2;
    operator = op;
    displayOne.innerText = `${n2} ${operator}`;
    n2 = ''
    displayTwo.innerText = '';
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
    n1 = roundNumber();
    displayTwo.innerText = n1;
    displayOne.innerText = '';
    n2 = n1;
    n1 = '';
}



// Clear display.
clearButton.addEventListener('click', (e) => {
    location.reload();
})



decimalButton.addEventListener('click', (e) => {
    addDecimal();
})


function addDecimal() {
    if(!n2.toString().includes('.')) {
    n2 += '.';
    displayTwo.innerText = n2;
    } 
}


function roundNumber() {
    return Math.round(n1 * 10000000) / 10000000;
}