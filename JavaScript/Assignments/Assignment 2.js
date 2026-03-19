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