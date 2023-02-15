//Variable declarations
var displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const numberButtons = numbers.querySelectorAll("button");
const operators = document.querySelector(".operators");
const operatorButtons = operators.querySelectorAll("button");
const equalsButton = document.querySelector("#equals");
var lastEntry = null;
const values = [];
const operations = [];
let a;
let b;

//Math functions for two number inputs
function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
    return a / b;
  };

//Operation functions  
function operate() {
    console.log(operator);
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);}
}

//Store numbers into display as string
function handleNumberClick() {
    if (lastEntry == "+" || lastEntry == "-" || lastEntry == "*" || lastEntry == "/") {
        displayValue = "";
        operations.push(lastEntry)
    }
    displayValue += this.id;
    display.textContent = displayValue;
    lastEntry = this.id;
}

//Operator click stores the displayValue into values array as a number
function handleOperatorClick() {
    if (lastEntry != "+" && lastEntry != "-" && lastEntry != "*" && lastEntry != "/") {
        displayValue = Number(displayValue);
        values.push(displayValue);
    }
    lastEntry = this.id;
}

//Equals click evaluates the entered numbers and operations
function handleEqualsClick() {
    if (lastEntry != "+" && lastEntry != "-" && lastEntry != "*" && lastEntry != "/") {
        displayValue = Number(displayValue);
        values.push(displayValue);
    }
    let result;
    for (operator of operations) {
        let index = operations.indexOf(operator);
        if (index === 0) {
            a = values.at(index);  
        } else {
            a = result;
        }
        b = values.at(index + 1);
        //if the last button was an operator, do not execute last operation
        if (b !== undefined) {
            result = operate(operator);
        }
    }
    displayValue = result;
    display.textContent = displayValue;
    lastEntry = this.id;
}

//Event listeners on number buttons
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", handleNumberClick);
});

//Event listeners on operator buttons
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", handleOperatorClick);
});

//Event listener on equals button
equalsButton.addEventListener("click", handleEqualsClick);


