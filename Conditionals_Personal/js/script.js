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