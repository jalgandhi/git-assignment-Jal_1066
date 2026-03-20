// JAL GANMDHI_1066

//Assignment 1 

let name = "Suresh";
let age = 65;
let purchaseAmount = 6000;

let discount = 0;

if (age < 18) {
    discount += 10;
} else if (age >= 60) {
    discount += 20;
}

if (purchaseAmount > 5000) {
    discount += 5;
}


let finalAmount = purchaseAmount - (purchaseAmount * discount / 100);


console.log(`Hi ${name}! You received a total discount of ${discount}%. Final amount: ₹${finalAmount}`);

//assignment 2

let correctUsername = "Jal";
let correctPassword = "1234";

let username = "Jal";
let password = "1234";

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
} else if (username !== correctUsername && password !== correctPassword) {
    console.log("Both incorrect");
} else if (username !== correctUsername) {
    console.log("Incorrect username");
} else {
    console.log("Incorrect password");
}

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

//Assignment 4

let isMember = false;
let cartValue = 2100;

if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("WOW!,Free Delivery");
} else {
    console.log("Sorry,You are not eligible for free delivery.");
}

//Assignmenmt 5

let marks = 89;

if (marks < 0 || marks > 100) {
    console.log("Invalid input");
} else if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
