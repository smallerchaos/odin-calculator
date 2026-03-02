// ----- HTML Elements ----- //
const displayElement = document.querySelector("#display");
const resultElement = document.querySelector("#result");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");

// ----- Universal Variables ----- //
let calculationArray = [];
let indexOfOperator;

// ----- Functions ----- //

equalsButton.addEventListener("click", () => {
    // Apply calculations by checking which operator is there and then applying the necessary calculation function
    calculation(turnIntoNumbers(calculationArray, indexOfOperator));

    // let result = calculation(turnIntoNumbers(calculationArray, indexOfOperator));
    // resultElement.textContent = result;
    calculationArray = [];
    console.log(`equals!`);
    console.log(calculationArray);
});

clearButton.addEventListener("click", () => {
    calculationArray = [];
    console.log("Clear Button!");
});

const numButton = document.querySelectorAll(".num-button");
numButton.forEach((item) => {
    item.addEventListener("click", () => {
        calculationArray.push(item.textContent);
        indexOfOperator = checkOperator();
        console.log(`indexOfOperator = ${indexOfOperator} and ${calculationArray[indexOfOperator]}`);
        console.log(calculationArray);
        console.log(item.textContent);
        return item.textContent;
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`calculationArray.length = ${calculationArray.length}`);
        indexOfOperator = checkOperator();
        console.log(`indexOfOperator = ${indexOfOperator}`)
        if (item.textContent === "×") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                console.log(`pop!`);
                console.log(calculationArray);
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("*");
        } else if (item.textContent === "÷") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                console.log(`pop!`);
                console.log(calculationArray);
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("/");
        } else if (item.textContent === "+") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("+");
        } else if (item.textContent === "-") {
            if (indexOfOperator !== -1 && indexOfOperator === calculationArray.length -1) {
                calculationArray.pop();
            } else if (indexOfOperator !== -1) {
                calculation(turnIntoNumbers(calculationArray, indexOfOperator));
            }
            calculationArray.push("-");
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
    result = (Math.round(result*10000))/10000
    console.log(result);

    resultElement.textContent = result;
    calculationArray = [];
    calculationArray.push(result);
}

const checkOperator = function () {
    return calculationArray.findIndex((element) => Number.isNaN(+element) === true);
}

// Number clicked
// operator clicked -> can change operator
// Number clicked
// If equals, return result
// If other operator, return result
// Backspace removes the last item
// Clear removes all items