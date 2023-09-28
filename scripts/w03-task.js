/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// STEP 2
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
// STEP 3
let subtract = function (number1, number2) {
    return number1 - number2
}

let subtractNumbers = function () {
    let subtract1 = Number(document.getElementById("subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => Number(number1) * Number(number2);

function multiplyNumbers() {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

let divideNumbers = function () {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
let dateToday = new Date();
let currentYear = "";
currentYear = dateToday.getFullYear();
// console.log(currentYear); 
document.getElementById("year").textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;


/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function (number) {
    return number % 2 !== 0;
});

document.getElementById("odds").innerHTML = oddNumbers;


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */
const multiplied = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").textContent = multiplied.reduce((sum, number) => sum + number);
