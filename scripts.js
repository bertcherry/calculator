//Variable declarations
var displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const numberButtons = numbers.querySelectorAll("button");
const operators = document.querySelector(".operators");
const operatorButtons = operators.querySelectorAll("button");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector("#Backspace");
const signButton = document.querySelector("#sign");
var lastEntry = null;
let values = [];
let operations = [];
let a;
let b;
const numberIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operatorIds = ["+", "-", "*", "/"];
const equalsId = "=";
const clearId = "Backspace";

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
    if (b == 0) {
        return "DIV/0";
    } else {
        return a / b;
    }
  };

//Operation functions  
function operate() {
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
        toggleSelected();
        displayValue = "";
        operations.push(lastEntry)
    } else if (lastEntry === "=") {
        handleClear();
    }
    displayValue += this.id;
    display.textContent = displayValue;
    toggleDecimal();
    lastEntry = this.id;
}

//Operator click stores the displayValue into values array as a number
function handleOperatorClick() {
    if (lastEntry == "+" || lastEntry == "-" || lastEntry == "*" || lastEntry == "/") {
        toggleSelected();
    } else if (lastEntry === "=") {
        let temp = displayValue;
        handleClear();
        displayValue = temp;
        display.textContent = displayValue;
        displayValue = Number(displayValue);
        values.push(displayValue);
    } else if (lastEntry != "+" && lastEntry != "-" && lastEntry != "*" && lastEntry != "/") {
        displayValue = Number(displayValue);
        values.push(displayValue);
    } 
    document.getElementById(".").disabled = false;
    lastEntry = this.id;
    toggleSelected();
}

//Equals click evaluates the entered numbers and operations
function handleEqualsClick() {  
    if (lastEntry == "+" || lastEntry == "-" || lastEntry == "*" || lastEntry == "/") {
        toggleSelected();
    } else if (lastEntry != "+" && lastEntry != "-" && lastEntry != "*" && lastEntry != "/") {
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
        if (result === "0") {
            break;
        } else {
            result = Math.round(result * 1000) / 1000;
        }

    }
    if (values.at(1) === undefined) {
        return;
    }
    displayValue = result;
    display.textContent = displayValue;
    console.log(displayValue);
    toggleDecimal();
    lastEntry = this.id;
}

//Clear click or starting a new calculation after getting a result resets all
function handleClear() {
    values = [];
    operations = [];
    displayValue = "";
    display.textContent = displayValue;
    toggleDecimal();
}

//Disable decimal button if there is already a decimal in display
function toggleDecimal() {
    if (displayValue.toString().includes(".") == true) {
        document.getElementById(".").disabled = true;
    } else {
        document.getElementById(".").disabled = false;
    }
}

//Change sign on display value when one is present
//add a toggleSign function to disable the button if there's no displayValue? depending on CSS display choice
function handleSign() {
    if (displayValue === "") {
        return;
    } else {
    displayValue *= -1;
    display.textContent = displayValue;
    }
}

//Guide keydown to correct functions
function handleKeydown(e) {
    e.preventDefault();
    let key = document.querySelector(`button[id="${e.key}"]`);
    if (key == null) {
        return;
    } else {
        keyId = key.getAttribute("id");
        if (numberIds.includes(keyId) == true) {
            handleNumberClick.call(key);
        } else if (operatorIds.includes(keyId) == true) {
            handleOperatorClick.call(key);
        } else if (equalsId.includes(keyId) == true) {
            handleEqualsClick.call(key);
        } else if (clearId.includes(keyId) == true) {
            handleClear.call(key);
        }
    }
}

//Toggle class for selected on operators
function toggleSelected() {
    const element = document.getElementById(`${lastEntry}`);
    element.classList.toggle("selected");
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

//Event listener on clear button
clearButton.addEventListener("click", handleClear);

//Event listener on sign button
signButton.addEventListener("click", handleSign);

//Event listener for keys
window.addEventListener("keydown", handleKeydown);