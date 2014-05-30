/*
Vanessa Marrero
May 29, 2014
Functions Assignment
*/

//This creates a date object.
var current = new Date();

//This detects the current hour from 0 to 23. If the hour is either 5 a.m or 5 p.m. or between those times, it tells the user "Good day!" otherwise it tells them "Good evening!" 
var salutation = "Good" + ((current.getHours() <= 17 && current.getHours() >= 5) ? " day!" : " evening!");

//This reports the user's current hour to the console.
console.log("It is currently hour " + current.getHours() + " according to the user's time settings.");

// This is the initial welcome message users receive.
var greet = salutation + "\n\nWelcome to my wacky calculator!";

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
