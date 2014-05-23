/*
Vanessa Marrero
May 22, 2014
Conditionals Assignment
*/

//This is creating a date object in order to work with dates and times.
var current = new Date();

//This detects the current hour from 0 to 23 and if it is 5 p.m. or before, it tells the user "Good day!" otherwise it tells them "Good evening!" 
var salutation = "Good" + ((current.getHours() <= 17) ? " day!" : " evening!");

// This is the initial welcome message users receive.
var greeting = salutation + "\n\nWelcome to my wacky calculator!";

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
var explanation = "Thank you " + name + "! \n\nToday, we will be calculating how much you weigh on each of the planets in our solar system as well as how old you are on those planets.";

// This is the alert with the calculation explanation.
alert(explanation);

// This is the message asking for and capturing the user's weight.
var weight = prompt("First, how many pounds (lbs) do you weigh?");

// The following validates the weight input by the user.
while (isNaN(weight) || weight === null || weight === "" || weight === " ") {
    alert("You need to input numbers for your weight!");
    var weight = prompt("Please enter your weight in pounds (lbs) using numbers.");
}

//This reports the user's weight to the console. 
console.log("The user's weight is " + weight + " pounds (lbs). \n");