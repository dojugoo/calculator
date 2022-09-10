//Constants and toggles
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
const percent = document.querySelector("#percent");

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
clearBtn.addEventListener("click", clearFunc);

//Event listener on operators
percent.addEventListener("click", percentFunc);
plus.addEventListener("click", plusFunc);
minus.addEventListener("click", minusFunc);
times.addEventListener("click", timesFunc);
divEvent.addEventListener("click", divideFunc);
equal.addEventListener("click", equalsFunc);


//Adding keyboard support
window.addEventListener("keydown", keyboardInput);

function keyboardInput(e) {
    if (e.keyCode == 96 || e.keyCode == 48) updateZero();
    if (e.keyCode == 49 || e.keyCode == 97) updateOne(); 
    if (e.keyCode == 50 || e.keyCode == 98) updateTwo();
    if (e.keyCode == 51 || e.keyCode == 99) updateThree(); 
    if (e.keyCode == 52 || e.keyCode == 100) updateFour();
    if (e.keyCode == 53 || e.keyCode == 101) updateFive(); 
    if (e.keyCode == 54 || e.keyCode == 102) updateSix();
    if (e.keyCode == 55 || e.keyCode == 103) updateSeven(); 
    if (e.keyCode == 56 || e.keyCode == 104) updateEight();
    if (e.keyCode == 57 || e.keyCode == 105) updateNine();
    if (e.keyCode == 110 || e.keyCode == 190) updatePeriod();
    if (e.keyCode == 106) timesFunc();
    if (e.keyCode == 189 || e.keyCode == 109) minusFunc();
    if (e.keyCode == 107) plusFunc();
    if (e.keyCode == 111 || e.keyCode == 191) divideFunc();
    if (e.keyCode == 187 || e.keyCode == 13) equalsFunc();
}

//Reset calculator
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

function resetClear() {
    if (clear === 1) {
        lineOne.textContent = "";
        clear = 0;
    }
}

function updateZero() {
    if (oper == "|") {
        return;
    }
    resetClear();
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
    resetClear();
    return lineOne.textContent += 1;
}

function updateTwo() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 2;
}

function updateThree() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 3;
}

function updateFour() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 4;
}

function updateFive() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 5;
}

function updateSix() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 6;
}

function updateSeven() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 7;
}

function updateEight() {
    if (oper == "|") {
        return;
    }
    resetClear();
    return lineOne.textContent += 8;
}

function updateNine() {
    if (oper == "|") {
        return;
    }
    resetClear();
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

function percentFunc() {
    if (clear === 1 && (oper == "+" || oper == "-" || oper == "*" || oper == "/")) {
        return;
    }
    if (toggle === 0) {
        numba = parseFloat(lineOne.textContent);
        oper = "%";
        toggle = 1;
        clear = 1;
    } else if (toggle === 1 && oper == "|") {
        oper = "%";   
    } else {
        numbb = parseFloat(lineOne.textContent);
        const ans = operate(oper, numba, numbb);
        numba = ans;
        oper = "%";
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
    } else if (operator === "%") {
        return percentage(a, b);
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

//a% of b
function percentage(a, b) {
    return (a/100) * b;
}