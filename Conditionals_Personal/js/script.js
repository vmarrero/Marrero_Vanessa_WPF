/*
Vanessa Marrero
May 22, 2014
Conditionals Assignment
*/

// This is the initial welcome message users receive.
var greeting = "Hi there! \n\nWelcome to my personal calculator!";

// This is the alert with the welcome message.
alert(greeting);

// This is the message asking for the user's name.
var nameRequest = "Before we get started, what is your name?";

// This is capturing the user's name from the prompt into a new variable.
var name = prompt(nameRequest);

// The following validates the name input by the user.
while (!isNaN(name) || name === null || name === "!" || name === "@" || name === "#" || name === "$" || name === "%" || name === "^" || name === "&" || name === "*" || name === "(" || name === ")" || name === "-" || name === "_" || name === "=" || name === "+" || name === "[" || name === "]" || name === "{" || name === "}" || name === "\\" || name === "|" || name === ";" || name === ":" || name === "'" || name === "\"" || name === "," || name === "<" || name === "." || name === ">" || name === "/" || name === "?" || name === "`" || name === "~") {
    alert("You need to input letters for your name!");
    var name = prompt("Please enter your name using letters.");
}

//This reports the user's name to the console. 
console.log("The user's name is " + name + ".");

// This explains to the user what it is we are calculating.
var explanation = "Thank you " + name + "! \n\nToday, we will be calculating your body mass index (BMI) in order to determine under which category your weight falls into - Underweight, Normal, Overweight, or Obese.";

// This is the alert with the calculation explanation.
alert(explanation);

// This is explaining to the user what is body mass index.
var bmiExplanation = "A person's body mass index is a measure of body fat based on an individual's height and weight. \n\nDoctors use BMI to determine the healthiness of an individual's weight.";

// This is the alert with the bmi explanation.
alert(bmiExplanation);