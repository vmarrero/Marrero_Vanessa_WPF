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

// This is the message asking for and capturing the user's weight.
var weight = prompt("First, how many pounds (lbs) do you weigh?");

// The following validates the weight input by the user.
while (isNaN(weight) || weight === null || weight === "" || weight === " ") {
    alert("You need to input numbers for your weight!");
    var weight = prompt("Please enter your weight in pounds (lbs) using numbers.");
}

//This reports the user's weight to the console. 
console.log("The user's weight is " + weight + " pounds (lbs).");

// This is the message asking for and capturing the user's height.
var height = prompt("Next, how tall are you in inches (in)?");

// The following validates the height input by the user.
while (isNaN(height) || height === null || height === "" || height === " ") {
    alert("You need to input numbers for your height!");
    var height = prompt("Please enter your height in inches (in) using numbers.");
}

//This reports the user's height to the console. 
console.log("The user's height is " + height + " inches (in).");

// This is the BMI calculation and capturing it into a variable.
var bmi = (weight / (height * height)) * 703;

//This reports the user's BMI to the console. BMI has been fixed to only include up to 2 decimal places. 
console.log("The user's body mass index (BMI) is " + bmi.toFixed(2) + ".");