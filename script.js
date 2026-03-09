// ----- HTML Elements ----- //
const displayElement = document.querySelector("#display");
const resultElement = document.querySelector("#result");
const errorMessageElement = document.querySelector("#error-message");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");
const decimalButton = document.querySelector("#decimal");

// ----- Universal Variables ----- //
let calculationArray = [];
let indexOfOperator;
let calculationResult = 0;

// ----- Functions ----- //

backspaceButton.addEventListener("click", () => {
    // if (calculationResult > 0) {
    // // Don't let user backspace if a calculation has already happened 
    // } else {
            console.log(`backspace!`);
        calculationArray.pop();
            console.log(calculationArray);
        displayCalculationArray(calculationArray, indexOfOperator);
    // }
});

equalsButton.addEventListener("click", () => {
    indexOfOperator = checkOperator();
    if (indexOfOperator === calculationArray.length -1) {
        // If the last thing selected was an operator, don't do anything.
    } else if (calculationArray.length >= 1) {
        calculation(turnIntoNumbers(calculationArray, indexOfOperator));
    calculationArray = [];
        console.log(`equals!`);
        console.log(calculationArray);
    }
});

clearButton.addEventListener("click", () => {
    calculationArray = [];
    calculationResult = 0;
        console.log("Clear Button!");
    displayElement.textContent = "";
    resultElement.textContent = "";
    errorMessageElement.textContent = "";
});

decimalButton.addEventListener("click", () => {
    indexOfOperator = checkOperator();
    console.log(`decimalButton indexOfOperator = ${indexOfOperator}`);
    // console.log(`Number.isInteger(Number(currentNumberArray.join(''))) = ${Number.isInteger(Number(currentNumberArray.join('')))}`);
    if (calculationArray.length === 0) {
        // If there's nothing in the array, add 0.
        console.log(`There's nothing in calculation array`);
        calculationArray.push("0");
        calculationArray.push(".");
    } else if (indexOfOperator !== -1) {
        // If there's already an operator, remove the number and operator before
        let currentNumberArray = calculationArray.slice(indexOfOperator + 1, calculationArray.length - 1);
        console.log(`currentNumberArray`);
        console.log(currentNumberArray);
        if (currentNumberArray.length === 0) {
            // If there is no number, add 0.
            console.log(`currentNumberArray.length === 0`);
            calculationArray.push("0");
            calculationArray.push(".");
        } else if (!currentNumberArray.includes(".")) {
            // If the current number is an integer, add a decimal point. Otherwise, don't do anything
            console.log(`!Number.isInteger(Number(currentNumber.join(''))) = ${!Number.isInteger(Number(currentNumberArray.join('')))}`);
            currentNumberArray.push(".");
        }
    } else if (!calculationArray.includes(".")) {
        calculationArray.push(".");
    }
    console.log(calculationArray);
    displayCalculationArray(calculationArray, indexOfOperator);
});

const numButton = document.querySelectorAll(".num-button");
numButton.forEach((item) => {
    item.addEventListener("click", () => {
        indexOfOperator = checkOperator();
        console.log(`Number(calculationArray.slice(0, indexOfOperator).includes(".")).isInteger() === false = ${Number.isInteger(Number(calculationArray.slice(0, indexOfOperator))) === false}`);
        // If the operator is / and the button you pressed is 0, show error message
        // Otherwise, push the number to calculationArray
        if (calculationArray.includes("÷") && 
        indexOfOperator === calculationArray.length -1  && 
        +item.textContent === 0) {
            errorMessageElement.textContent = "Stop that D: It's infinity and will break the calculator."
            console.log("error! don't divide by 0");
        // } else if (Number(calculationArray.slice(0, indexOfOperator).includes(".")).isInteger() === true) {
            // There can only be one decimal before the operator and one after the operator.
            // 12.2.1.3
            // 12 + 3.1.4.1.
            // 12.2 + 92.1
            // Number.isInteger === false
        } else {
            errorMessageElement.textContent = "";
            calculationArray.push(String(item.textContent));
                console.log(`indexOfOperator = ${indexOfOperator} and ${calculationArray[indexOfOperator]}`);
                console.log(calculationArray);
                console.log(item.textContent);
            displayCalculationArray(calculationArray, indexOfOperator);
        }
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((item) => {
    item.addEventListener("click", () => {
            console.log(`calculationArray.length = ${calculationArray.length}`);
        indexOfOperator = checkOperator();
        errorMessageElement.textContent = "";
            console.log(`indexOfOperator = ${indexOfOperator}`);

        if (calculationResult === 0) {
            // If the result hasn't been calculated yet, remove all displayed elements.
            resultElement.textContent = "";
            displayElement.textContent = "";
        }

        console.log(`calculationArray.indexOf(".") = ${calculationArray.indexOf(".")}`);

        if (calculationArray.length === 0) {
            // If no numbers have been entered, don't do anything
            console.log(`caculationArray.length === 0`);
            return;
        } else if (calculationArray.indexOf(".") === calculationArray.length - 1) {
            // If there's already a decimal
                // If there's an operator, ignore the number that goes before the operator
            // If a decimal was the last thing entered, don't do anything
            console.log(`The last thing was a decimal`);
        } else if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
            // If an operator was the last thing selected, remove the operator and replace it with the new operator
                console.log(`pop!`);
                console.log(calculationArray);
            calculationArray.pop();
            calculationArray.push(item.textContent);
            displayCalculationArray(calculationArray, indexOfOperator);
        } else if (indexOfOperator !== -1) {
            console.log(`anything else`);
            // If an operator has already been selected, but numbers have been selected afterwards, calculate the result
            calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            calculationArray.push(item.textContent);
            displayCalculationArray(calculationArray, indexOfOperator);
        } else {
            // If there isn't an operator, add one
            console.log(`operator button else!`);
            calculationArray.push(item.textContent);
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

    } else if (array.includes("×")) {
        result = multiplication(num1, num2);
    } else if (array.includes("÷")) {
        result = division(num1, num2);
    }
    result = (Math.round(result*100000))/100000;
        console.log(result);

    resultElement.textContent = result;
    calculationResult = result;
        console.log(`calculationResult = ${calculationResult}`);
    calculationArray = [];
    calculationArray = (String(result).split(""));
    console.log(`calculation complete. calculationArray =`);
    console.log(calculationArray);
}

const checkOperator = function () {
    console.log(`checkOperator!`);
    return calculationArray.findIndex((element) => {
        // console.log(`checkOperator element = ${element}`);
        return (Number.isNaN(+element) && element !== ".") === true;
    });
}

const displayCalculationArray = function (array, operatorIndex) {
    if (array.length < 1) {
        // If there's nothing to calculate, don't do anything
    } else if (checkOperator(array) === -1) {
        // If there is no operator, just join calculationArray and display
            console.log(`no operators`);
        displayElement.textContent = array.join("");
    } else if (checkOperator(array) === array.length -1) {
        // If an operator was the last thing selected, then join everything before and display
            console.log(`checkOperator(array) === array.length -1 = ${checkOperator(array) === array.length -1}`);
        displayElement.textContent = `${array.slice(0, array.length - 1).join("")} ${array[array.length - 1]}`;
    } else {
            console.log(`else in displayCalculationArray`);
            console.log(`array.slice(operatorIndex + 1, array.length - 1).join("")`);
            console.log(array.slice(operatorIndex + 1, array.length - 1).join(""));
            console.log(`operatorIndex = ${operatorIndex}`);
            console.log(`array.length = ${array.length}`);
            console.log(`last character in the array = ${array[array.length - 1]}`)
        displayElement.textContent = `${array.slice(0, operatorIndex).join("")} ${array[operatorIndex]} ${array.slice(operatorIndex + 1, array.length).join("")}`;
    }
}
// TODO
// Allow users to enter decimal numbers