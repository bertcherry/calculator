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

function power(a, b) {
	return a**b;
};

function operate(operator) {
    if (operator === "+") {add();};
    if (operator === "-") {subtract();};
    if (operator === "*") {multiply();};
    if (operator === "/") {divide();};
    if (operator === "**") {power();};
}