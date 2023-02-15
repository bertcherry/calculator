//Variable declarations
var displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const numberButtons = numbers.querySelectorAll("button");
const operators = document.querySelector(".operators");
const operatorButtons = operators.querySelectorAll("button");
var lastEntry = null;
const values = [];
const operations = [];

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
function operate(operator) {
    if (operator === "+") {add();};
    if (operator === "-") {subtract();};
    if (operator === "*") {multiply();};
    if (operator === "/") {divide();};
    if (operator === "**") {power();};
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

//Event listeners on number buttons
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", handleNumberClick);
});

//Event listeners on operator buttons
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", handleOperatorClick);
});