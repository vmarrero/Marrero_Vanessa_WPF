/*
Vanessa Marrero
May 29, 2014
Functions Assignment
*/

// This is the welcome message users receive.
var greet = "Hello! \n\nWelcome to my personal calculator!";

// This is the alert with the welcome message.
alert(greet);

// This is the message asking for the user's name.
var requestName = "First off, what is your name?";

// This is storing the user's name from the prompt into a new variable.
var n = prompt(requestName);

// The following validates the name of the user.
while (!isNaN(n) || n < 1 || n === "!" || n === "@" || n === "#" || n === "$" || n === "%" || n === "^" || n === "&" || n === "*" || n === "(" || n === ")" || n === "-" || n === "_" || n === "=" || n === "+" || n === "[" || n === "]" || n === "{" || n === "}" || n === "\\" || n === "|" || n === ";" || n === ":" || n === "'" || n === "\"" || n === "," || n === "<" || n === "." || n === ">" || n === "/" || n === "?" || n === "`" || n === "~") {
    alert("You need to put LETTERS for your name!");
    var n = prompt("Enter your name using LETTERS!");
}

// This explains to the user what we are calculating.
var explain = "Thank you " + n + "! \n\nWe're going to be calculating your body mass index (BMI) in order to figure out under which classification your weight falls into - Underweight, Normal, Overweight, or Obese.";

// This is the alert with the calculator explanation.
alert(explain);

// This explains to the user what is body mass index.
var bmiExplain = n + ", a person's body mass index is a measure of body fat based on an individual's height and weight. \n\nDoctors use BMI to determine the healthiness of an individual's weight.";

// This is the alert with the explanation of bmi.
alert(bmiExplain);
