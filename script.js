
const lineOne = document.querySelector("#line-one");
const lineTwo = document.querySelector("#line-two");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

zero.addEventListener("click", () => (lineOne.textContent === "") ? "" : lineOne.textContent += 0);
one.addEventListener("click", () => lineOne.textContent += 1);
two.addEventListener("click", () => lineOne.textContent += 2);
three.addEventListener("click", () => lineOne.textContent += 3);
four.addEventListener("click", () => lineOne.textContent += 4);
five.addEventListener("click", () => lineOne.textContent += 5);
six.addEventListener("click", () => lineOne.textContent += 6);
seven.addEventListener("click", () => lineOne.textContent += 7);
eight.addEventListener("click", () => lineOne.textContent += 8);
nine.addEventListener("click", () => lineOne.textContent += 9);

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