
//Buttoned/displayed value into variable
let numba;
let numbb;
let oper = "";
let toggle = 0;
let clear = 0;

//Display values on calculator screen
const lineOne = document.querySelector("#line-one");

//Identify and select buttons
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
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const divEvent = document.querySelector("#divide");
const equal = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");

//Event listener on buttons
period.addEventListener("click", updatePeriod);
zero.addEventListener("click", updateZero);
one.addEventListener("click", updateOne);
two.addEventListener("click", updateTwo);
three.addEventListener("click", updateThree);
four.addEventListener("click", updateFour);
five.addEventListener("click", updateFive);
six.addEventListener("click", updateSix);
seven.addEventListener("click", updateSeven);
eight.addEventListener("click", updateEight);
nine.addEventListener("click", updateNine);

plus.addEventListener("click", plusFunc);
minus.addEventListener("click", minusFunc);
times.addEventListener("click", timesFunc);
divEvent.addEventListener("click", divideFunc);
equal.addEventListener("click", equalsFunc);

clearBtn.addEventListener("click", clearFunc);

function clearFunc() {
    lineOne.textContent = "";
    oper = "";
    toggle = 0;
    clear = 0;
}

function updatePeriod() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    if (lineOne.textContent.includes(".")) {
        return;
    }
    if (lineOne.textContent == "") {
        return lineOne.textContent += "0.";
    }   else {
        return lineOne.textContent += ".";
    }
}

function updateZero() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    if (lineOne.textContent == "") {
        return;
    } else {
        return lineOne.textContent += "0";
    }
}

function updateOne() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 1;
}

function updateTwo() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 2;
}

function updateThree() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 3;
}

function updateFour() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 4;
}

function updateFive() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 5;
}

function updateSix() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 6;
}

function updateSeven() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 7;
}

function updateEight() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 8;
}

function updateNine() {
    if (oper == "|") {
        return;
    }
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
    return lineOne.textContent += 9;
}

//When + is pressed, if tog = 0, store value into numba, store operator
function plusFunc() {
    if (clear === 1 && (oper === "+" || oper === "-" || oper === "*" || oper === "/")) {
        return;
    }
    if (toggle === 0) {
        numba = parseFloat(lineOne.textContent);
        oper = "+";
        toggle = 1;
        clear = 1;
    } else if (toggle === 1 && oper == "|") {
        oper = "+";   
    } else {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        oper = "+";
        lineOne.textContent = numba;
        clear = 1;
    }
}

function minusFunc() {
    if (clear === 1 && (oper == "+" || oper == "-" || oper == "*" || oper == "/")) {
        return;
    }
    if (toggle === 0) {
        numba = parseFloat(lineOne.textContent);
        oper = "-";
        toggle = 1;
        clear = 1;
    } else if (toggle === 1 && oper == "|") {
        oper = "-";   
    } else {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        oper = "-";
        lineOne.textContent = numba;
        clear = 1;
    }
}

function timesFunc() {
    if (clear === 1 && (oper == "+" || oper == "-" || oper == "*" || oper == "/")) {
        return;
    }
    if (toggle === 0) {
        numba = parseFloat(lineOne.textContent);
        oper = "*";
        toggle = 1;
        clear = 1;
    } else if (toggle === 1 && oper == "|") {
        oper = "*";   
    } else {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        oper = "*";
        lineOne.textContent = numba;
        clear = 1;
    }
}

function divideFunc() {
    if (clear === 1 && (oper == "+" || oper == "-" || oper == "*" || oper == "/")) {
        return;
    }
    if (toggle === 0) {
        numba = parseFloat(lineOne.textContent);
        oper = "/";
        toggle = 1;
        clear = 1;
    } else if (toggle === 1 && oper == "|") {
        oper = "/";   
    } else {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        oper = "/";
        lineOne.textContent = numba;
        clear = 1;
    }
}

function equalsFunc() {
    if (toggle == 0) {
        return;
    }
    if (toggle == 1 && clear == 1) {
        return;
    }
    if (oper == "") {
        return;
    }
    if (toggle == 1 && clear == 0) {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        lineOne.textContent = numba;
        oper = "|";
        clear = 1;
    }
}

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