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

//planetary weight is equal to earth weight in pounds times the planet's gravitational pull (surface gravity compared to earth's).

//These are the planetary surface gravities. Values obtained fron NASA Planetary Fact Sheet.
var surfaceGravityMercury = 0.378;
var surfaceGravityVenus = 0.907;
var surfaceGravityEarth = 1;
var surfaceGravityMars = 0.377;
var surfaceGravityJupiter = 2.36;
var surfaceGravitySaturn = 0.916;
var surfaceGravityUranus = 0.889;
var surfaceGravityNeptune = 1.12;
var surfaceGravityPluto = 0.059;

// These are the planetary weights calculations and capturing them into variables.
var weightMercury = weight * surfaceGravityMercury;
var weightVenus = weight * surfaceGravityVenus;
var weightEarth = weight * surfaceGravityEarth;
var weightMars = weight * surfaceGravityMars;
var weightJupiter = weight * surfaceGravityJupiter;
var weightSaturn = weight * surfaceGravitySaturn;
var weightUranus = weight * surfaceGravityUranus;
var weightNeptune = weight * surfaceGravityNeptune;
var weightPluto = weight * surfaceGravityPluto;

//This alerts the user to their planetary weights.
alert("The following are your weights on each planet of our solar system: \n\nMercury: " + weightMercury.toFixed(1) + " pounds (lbs) \nVenus: " + weightVenus.toFixed(1) + " pounds (lbs) \nEarth: " + weightEarth.toFixed(1) + " pounds (lbs) \nMars: " + weightMars.toFixed(1) + " pounds (lbs) \nJupiter:  " + weightJupiter.toFixed(1) + " pounds (lbs) \nSaturn: " + weightSaturn.toFixed(1) + " pounds (lbs) \nUranus: " + weightUranus.toFixed(1) + " pounds (lbs) \nNeptune: " + weightNeptune.toFixed(1) + " pounds (lbs) \nPluto: " + weightPluto.toFixed(1) + " pounds (lbs) \n\n*Note: Pluto is a dwarf planet and NASA still counts it!*");

//This reports the user's planetary weights to the console. 
console.log("The user's weight on Mercury is " + weightMercury.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Venus is " + weightVenus.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Earth is " + weightEarth.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Mars is " + weightMars.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Jupiter is " + weightJupiter.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Saturn is " + weightSaturn.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Uranus is " + weightUranus.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Neptune is " + weightNeptune.toFixed(1) + " pounds (lbs).");
console.log("The user's weight on Pluto is " + weightPluto.toFixed(1) + " pounds (lbs). Pluto is a dwarf planet and is still counted by NASA! \n");

// This is the message asking for and capturing the user's age.
var age = prompt("Next, how many years old are you?");

// The following validates the weight input by the user.
while (isNaN(age) || age === null || age === "" || age === " ") {
    alert("You need to input numbers for your age!");
    var age = prompt("Please enter your age in years using numbers.");
}

//This reports the user's weight to the console. 
console.log("The user's age is " + age + " years old. \n");

//planetary age is equal to earth age in years divided by the planet's period of revolution around the sun in earth years. 

//These are the planetary orbital periods. Values obtained fron NASA Planetary Fact Sheet.
var orbitalPeriodMercury = 0.241;
var orbitalPeriodVenus = 0.615;
var orbitalPeriodEarth = 1;
var orbitalPeriodMars = 1.88;
var orbitalPeriodJupiter = 11.9;
var orbitalPeriodSaturn = 29.4;
var orbitalPeriodUranus = 83.7;
var orbitalPeriodNeptune = 163.7;
var orbitalPeriodPluto = 248.0;

//These are the planetary ages calculations and capturing them into variables.
var ageMercury = age / orbitalPeriodMercury;
var ageVenus = age / orbitalPeriodVenus;
var ageEarth = age / orbitalPeriodEarth;
var ageMars = age / orbitalPeriodMars;
var ageJupiter = age / orbitalPeriodJupiter;
var ageSaturn = age / orbitalPeriodSaturn;
var ageUranus = age / orbitalPeriodUranus;
var ageNeptune = age / orbitalPeriodNeptune;
var agePluto = age / orbitalPeriodPluto;