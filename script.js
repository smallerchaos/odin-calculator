const displayElement = document.querySelector("#display");
const resultElement = document.querySelector("#result");

const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const backspaceButton = document.querySelector("#backspace");

equalsButton.addEventListener("click", () => {
    // Apply calculations by checking which operator is there and then applying the necessary calculation function
});

clearButton.addEventListener("click", () => {
    console.log("Clear Button!");
});

const numButton = document.querySelectorAll(".num-button");
numButton.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
        return item.textContent;
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((item) => {
    item.addEventListener("click", () => {
        // TODO: Add checks to see if there is already an operator

        if (item.textContent === "×") {
            console.log("*");
        } else if (item.textContent === "÷") {
            console.log("/");
        } else {
            console.log(item.textContent);
        }
    });
});

const addition = function (num1, num2) {
    // We could also use reduce
}

let display = function () {}

// Number clicked
// operator clicked -> can change operator
// Number clicked
// If equals, return result
// If other operator, return result
// Backspace removes the last item
// Clear removes all items