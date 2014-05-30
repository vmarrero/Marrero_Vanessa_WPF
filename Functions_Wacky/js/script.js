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

//This reports the user's name to the console. 
console.log("The user's name is " + n + ".\n");

// This explains to the user what we are calculating.
var explain = "Thank you " + n + "! \n\nToday, we're calculating how much you weigh on a planet of your choice in our solar system as well as how old you are on another planet of your choice within our solar system.\n\nYour choices do NOT have to be the same!";

// This is the alert with the calculator explanation.
alert(explain);

// This is the message asking for and storing the user's weight.
var w = prompt("How many pounds (lbs) do you weigh?");

// The following validates the weight of the user.
while (isNaN(w) || w < 1) {
    alert("You need to put POSITIVE NUMBERS for your weight! \n\nYou CANNOT leave the box EMPTY or put 0 or negative numbers for your weight!");
    var w = prompt("Enter your weight in pounds (lbs) using NUMBERS.");
}

//This reports the user's weight to the console. 
console.log("The user's weight is " + w + " pounds (lbs).");

// This is the message asking for and storing the user's planet of choice to figure out their planetary weight.
var whichPlanet1 = prompt("On which of the nine planets would you like to know what you weigh?\n\nMercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune\nPluto");

// The following validates the planetary choice of the user.
while (whichPlanet1 !== "Mercury" && whichPlanet1 !== "mercury" && whichPlanet1 !== "Venus" && whichPlanet1 !== "venus" && whichPlanet1 !== "Earth" && whichPlanet1 !== "earth" && whichPlanet1 !== "Mars" && whichPlanet1 !== "mars" && whichPlanet1 !== "Jupiter" && whichPlanet1 !== "jupiter" && whichPlanet1 !== "Saturn" && whichPlanet1 !== "saturn" && whichPlanet1 !== "Uranus" && whichPlanet1 !== "uranus" && whichPlanet1 !== "Neptune" && whichPlanet1 !== "neptune" && whichPlanet1 !== "Pluto" && whichPlanet1 !== "pluto") {
    alert("You need to choose one of the nine planets!");
    var whichPlanet1 = prompt("Choose one of the nine planet choices!");
}

//This reports the user's first chosen planet to the console. 
console.log("The user would like to know what they weigh on " + whichPlanet1 + ".\n");
