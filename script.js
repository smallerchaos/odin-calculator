// ----- HTML Elements ----- //
const displayElement = document.querySelector("#display");
const resultElement = document.querySelector("#result");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");

// ----- Universal Variables ----- //
let calculationArray = [];

// ----- Functions ----- //

equalsButton.addEventListener("click", () => {
    // Apply calculations by checking which operator is there and then applying the necessary calculation function
});

clearButton.addEventListener("click", () => {
    calculationArray = [];
    console.log("Clear Button!");
});

const numButton = document.querySelectorAll(".num-button");
numButton.forEach((item) => {
    item.addEventListener("click", () => {
        calculationArray.push(Number(item.textContent));
        let indexOfOperator = calculationArray.findIndex((element) => typeof(element) === "string");
        console.log(`indexOfOperator = ${indexOfOperator} and ${calculationArray[indexOfOperator]}`);
        console.log(calculationArray);
        console.log(item.textContent);
        return item.textContent;
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((item) => {
    item.addEventListener("click", () => {
        // TODO: Add checks to see if there is already an operator
        if (item.textContent === "×") {
            calculationArray.push("*");
            console.log("*");
            console.log(calculationArray);
        } else if (item.textContent === "÷") {
            calculationArray.push("/");
            console.log("/");
            console.log(calculationArray);
        } else if (item.textContent === "+") {
            calculationArray.push("+");
            console.log("plus!");
            console.log(calculationArray);
            console.log(item.textContent);
        } else if (item.textContent === "-") {
            calculationArray.push("-");
            console.log("minus!");
            console.log(calculationArray);
            console.log(item.textContent);
        }
    });
});

const addition = function (num1, num2) {
    // We could also use reduce
}

let calculation = function () {}

// Number clicked
// operator clicked -> can change operator
// Number clicked
// If equals, return result
// If other operator, return result
// Backspace removes the last item
// Clear removes all items