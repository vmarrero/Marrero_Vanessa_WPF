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

// This is the message asking for and storing the user's age.
var a = prompt("How many years old are you?");

// The following validates the age of the user.
while (isNaN(a) || a < 1) {
    alert("You need to put POSITIVE NUMBERS for your age! \n\nYou CANNOT leave the box EMPTY or put 0 or negative numbers for your age!");
    var a = prompt("Enter your age in years using NUMBERS.");
}

//This reports the user's age to the console. 
console.log("The user's age is " + a + " years old.");

// This is the message asking for and storing the user's planet of choice to figure out their planetary age.
var whichPlanet2 = prompt("On which of the nine planets would you like to know what your age?\n\nMercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune\nPluto");

// The following validates the planetary choice of the user.
while (whichPlanet2 !== "Mercury" && whichPlanet2 !== "mercury" && whichPlanet2 !== "Venus" && whichPlanet2 !== "venus" && whichPlanet2 !== "Earth" && whichPlanet2 !== "earth" && whichPlanet2 !== "Mars" && whichPlanet2 !== "mars" && whichPlanet2 !== "Jupiter" && whichPlanet2 !== "jupiter" && whichPlanet2 !== "Saturn" && whichPlanet2 !== "saturn" && whichPlanet2 !== "Uranus" && whichPlanet2 !== "uranus" && whichPlanet2 !== "Neptune" && whichPlanet2 !== "neptune" && whichPlanet2 !== "Pluto" && whichPlanet2 !== "pluto") {
    alert("You need to choose one of the nine planets!");
    var whichPlanet2 = prompt("Choose one of the nine planet choices!");
}

//This reports the user's second planet to the console. 
console.log("The user would like to know their age on " + whichPlanet2 + ".\n");

//This is an anonymous function to figure out the user's planetary weight.
var planetaryWeight = function (weight) {
//This function uses a set standard formula to figure out the desired information; it cannot be changed and still yield valid results.
    
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

//This is the conditional if the user chooses Mercury.
    if (whichPlanet1 === "Mercury" || whichPlanet1 === "mercury") {
        var weightMercury = weight * surfaceGravityMercury;
        return weightMercury;
    }

//This is the conditional if the user chooses Venus.
    if (whichPlanet1 === "Venus" || whichPlanet1 === "venus") {
        var weightVenus = weight * surfaceGravityVenus;
        return weightVenus;
    }

//This is the conditional if the user chooses Earth.    
    if (whichPlanet1 === "Earth" || whichPlanet1 === "earth") {
        var weightEarth = weight * surfaceGravityEarth;
        return weightEarth;
    }
    
//This is the conditional if the user chooses Mars.
    if (whichPlanet1 === "Mars" || whichPlanet1 === "mars") {
        var weightMars = weight * surfaceGravityMars;
        return weightMars;
    }
    
//This is the conditional if the user chooses Jupiter.
    if (whichPlanet1 === "Jupiter" || whichPlanet1 === "jupiter") {
        var weightJupiter = weight * surfaceGravityJupiter;
        return weightJupiter;
    }
    
//This is the conditional if the user chooses Saturn.
    if (whichPlanet1 === "Saturn" || whichPlanet1 === "saturn") {
        var weightSaturn = weight * surfaceGravitySaturn;
        return weightSaturn;
    }
    
//This is the conditional if the user chooses Uranus.
    if (whichPlanet1 === "Uranus" || whichPlanet1 === "uranus") {
        var weightUranus = weight * surfaceGravityUranus;
        return weightUranus;
    }
    
//This is the conditional if the user chooses Neptune.
    if (whichPlanet1 === "Neptune" || whichPlanet1 === "neptune") {
        var weightNeptune = weight * surfaceGravityNeptune;
        return weightNeptune;
    }
    
//This is the conditional if the user chooses Pluto.
    if (whichPlanet1 === "Pluto" || whichPlanet1 === "pluto") {
        var weightPluto = weight * surfaceGravityPluto;
        return weightPluto;
    }
    
}

//This is an anonymous function to figure out the user's planetary age.
var planetaryAge = function (age) {
//This function uses a set standard formula to figure out the desired information; it cannot be changed and still yield valid results.
    
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
    
//This is the conditional if the user chooses Mercury.
    if (whichPlanet2 === "Mercury" || whichPlanet2 === "mercury") {
        var ageMercury = age / orbitalPeriodMercury;
        return ageMercury;
    }
    
//This is the conditional if the user chooses Venus.
    if (whichPlanet2 === "Venus" || whichPlanet2 === "venus") {
        var ageVenus = age / orbitalPeriodVenus;
        return ageVenus;
    }
    
//This is the conditional if the user chooses Earth.
    if (whichPlanet2 === "Earth" || whichPlanet2 === "earth") {
        var ageEarth = age / orbitalPeriodEarth;
        return ageEarth;
    }
    
//This is the conditional if the user chooses Mars.
    if (whichPlanet2 === "Mars" || whichPlanet2 === "mars") {
        var ageMars = age / orbitalPeriodMars;
        return ageMars;
    }
    
//This is the conditional if the user chooses Jupiter.
    if (whichPlanet2 === "Jupiter" || whichPlanet2 === "jupiter") {
        var ageJupiter = age / orbitalPeriodJupiter;
        return ageJupiter;
    }
    
//This is the conditional if the user chooses Saturn.
    if (whichPlanet2 === "Saturn" || whichPlanet2 === "saturn") {
        var ageSaturn = age / orbitalPeriodSaturn;
        return ageSaturn;
    }
    
//This is the conditional if the user chooses Uranus.
    if (whichPlanet2 === "Uranus" || whichPlanet2 === "uranus") {
        var ageUranus = age / orbitalPeriodUranus;
        return ageUranus;
    }
    
//This is the conditional if the user chooses Neptune.
    if (whichPlanet2 === "Neptune" || whichPlanet2 === "neptune") {
        var ageNeptune = age / orbitalPeriodNeptune;
        return ageNeptune;
    }
    
//This is the conditional if the user chooses Pluto.
    if (whichPlanet2 === "Pluto" || whichPlanet2 === "pluto") {
        var agePluto = age / orbitalPeriodPluto;
        return agePluto;
    }
}

//This is calling the planetaryWeight function and capturing the weight of the corresponding planet chosen by the user in a new variable so that it can be used outside of the function.
var weightResults = planetaryWeight(w);

//This is calling the planetaryAge function and capturing the age of the corresponding planet chosen by the user in a new variable so that it can be used outside of the function.
var ageResults = planetaryAge(a);
