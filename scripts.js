//Variable declarations
var displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const numberButtons = numbers.querySelectorAll("button");

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

function operate(operator) {
    if (operator === "+") {add();};
    if (operator === "-") {subtract();};
    if (operator === "*") {multiply();};
    if (operator === "/") {divide();};
    if (operator === "**") {power();};
}

//Store numbers into display
function handleNumberClick() {
    displayValue += this.id;
    display.textContent = displayValue;
}

//Event listeners on number buttons to change display
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", handleNumberClick);
});