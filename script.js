// ----- HTML Elements ----- //
const displayElement = document.querySelector("#display");
const resultElement = document.querySelector("#result");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");

// ----- Universal Variables ----- //
let calculationArray = [];
let indexOfOperator;
let calculationResult = 0;

// ----- Functions ----- //

backspaceButton.addEventListener("click", () => {
    if (calculationResult > 0) {
    // Don't let user backspace if a calculation has already happened 
    } else {
        console.log(`backspace!`);
        calculationArray.pop();
        console.log(calculationArray);
        displayCalculationArray(calculationArray, indexOfOperator);
    }
});

equalsButton.addEventListener("click", () => {
    if (calculationArray.length >= 1) {
        calculation(turnIntoNumbers(calculationArray, indexOfOperator));
    calculationArray = [];
    calculationResult = 0;
    console.log(`equals!`);
    console.log(calculationArray);
    }
});

clearButton.addEventListener("click", () => {
    calculationArray = [];
    calculationResult = 0;
    console.log("Clear Button!");
    displayElement.textContent = '';
    resultElement.textContent = " ";
});

const numButton = document.querySelectorAll(".num-button");
numButton.forEach((item) => {
    item.addEventListener("click", () => {
        calculationArray.push(item.textContent);
        indexOfOperator = checkOperator();
        console.log(`indexOfOperator = ${indexOfOperator} and ${calculationArray[indexOfOperator]}`);
        console.log(calculationArray);
        console.log(item.textContent);
        displayCalculationArray(calculationArray, indexOfOperator);
        return item.textContent;
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`calculationArray.length = ${calculationArray.length}`);
        indexOfOperator = checkOperator();
        console.log(`indexOfOperator = ${indexOfOperator}`)
        if (calculationArray.length === 0) {
            return;
        } else if (item.textContent === "×") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                console.log(`pop!`);
                console.log(calculationArray);
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("*");
            displayCalculationArray(calculationArray, indexOfOperator);
        } else if (item.textContent === "÷") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                console.log(`pop!`);
                console.log(calculationArray);
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("/");
            displayCalculationArray(calculationArray, indexOfOperator);
        } else if (item.textContent === "+") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("+");
            displayCalculationArray(calculationArray, indexOfOperator);
        } else if (item.textContent === "-") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("-");
            displayCalculationArray(calculationArray, indexOfOperator);
        }
        console.log(`operator!`);
        console.log(calculationArray);
    });
});

const turnIntoNumbers = function(array, operatorIndex) {
    let firstNum = Number(array.slice(0, operatorIndex).join(""));
    console.log(firstNum);
    let secondNum = Number(array.slice(operatorIndex + 1, array.length + 1).join(""));
    console.log(secondNum);
    let finalArray = [firstNum, array[operatorIndex], secondNum];
    console.log(finalArray);
    return finalArray;
}

const addition = function (num1, num2) {
    return num1 + num2;
}

const subtraction = function (num1, num2) {
    return num1 - num2;
}

const division = function (num1, num2) {
    return num1 / num2;
}

const multiplication = function (num1, num2) {
    return num1 * num2;
}

const calculation = function (array) {
    const num1 = array[0];
    const num2 = array[2];
    let result;
    if (array.includes("+")) {
        result = addition(num1, num2);
    } else if (array.includes("-")) {
        result = subtraction(num1, num2);
    } else if (array.includes("*")) {
        result = multiplication(num1, num2);
    } else if (array.includes("/")) {
        result = division(num1, num2);
    }
    result = (Math.round(result*100000))/100000;
    console.log(result);

    resultElement.textContent = result;
    calculationResult = result;
    console.log(`calculationResult = ${calculationResult}`);
    calculationArray = [];
    calculationArray.push(result);
}

const checkOperator = function () {
    return calculationArray.findIndex((element) => Number.isNaN(+element) === true);
}

const displayCalculationArray = function (array, operatorIndex) {
    if (array.length < 1) {
        // If there's nothing to calculate, don't do anything
    } else if (checkOperator(array) === -1) {
        console.log(`no operators`);
        displayElement.textContent = array.join("");
    } else if (checkOperator(array) === array.length -1) {
        console.log(`checkOperator(array) === array.length -1 = ${checkOperator(array) === array.length -1}`);
        displayElement.textContent = `${array.slice(0, array.length - 1).join("")} ${array[array.length - 1]}`;
    } else {
        console.log(`else in displayCalculationArray`);
        displayElement.textContent = turnIntoNumbers(array, operatorIndex).join(" ");
    }
}

// TODO
// Do not allow users to divide by 0