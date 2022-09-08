//Computes given operator and two numbers
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    }
}

//Add two numbers together
function add(a, b) {
     return a + b;
}

//Subtract b from a
function subtract(a, b) {
    return a - b;
}

//Multiply a and b
function multiply(a, b) {
    return a * b;
}

//Divide a by b
function divide(a, b) {
    return a / b;
}