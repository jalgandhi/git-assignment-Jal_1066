//Assignment 3

let number = 7;
let type = "";
if (number > 0) {
    type = "positive";
} else if (number < 0) {
    type = "negative";
} else {
    type = "zero";
}
let evenOdd = (number % 2 === 0) ? "even" : "odd";

console.log(`The number ${number} is ${type} and ${evenOdd}.`);