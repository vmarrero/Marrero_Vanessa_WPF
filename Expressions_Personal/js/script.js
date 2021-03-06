/*
Vanessa Marrero
May 15, 2014
Expressions Assignment
*/

// This is the initial welcome message users will receive.
var greeting = "Hello! \n\nWelcome to my personal calculator!";

// This is the alert with the welcome message.
alert(greeting);

// This is the message requesting the user's name.
var nameRequest = "Before we begin, what is your name?";

// This is capturing the user's name from the prompt in a new variable.
var name = prompt(nameRequest); 

//This is reporting the user's name to the console. 
console.log("The user\'s name is " + name + ".");

// This is explaining to the user what it is we are calculating.
var explanation = "Thank you " + name + "! \n\nToday, we will be calculating how many bottles of beer you consume in a year and how much it costs you per year."; 

// This is the alert with the explanation.
alert(explanation); 

// This is the message asking for the amount of beer bottles consumed in a week.
var beerBottles = "How many beers do you consume a week?";

// This is capturing the number of beer bottles the user drinks in a week.
var weeklyBeerBottlesNumber = prompt(beerBottles); 

// This is calculating how many bottles of beer the user drinks a year based off the number they drink a week.
var yearlyBeerBottlesNumber = weeklyBeerBottlesNumber * 52;

// This is an alert informing the user how many beer bottless they consume per year.
alert(name + ", you consume " + yearlyBeerBottlesNumber + " bottles of beer a year. \n\nCheers!");

// This is reporting the number of beer bottles the user drinks per year to the console.  
console.log(name + " consumes " + yearlyBeerBottlesNumber + " bottles of beer a year.");

// This is prompting the user to answer how much a 12 pack of beer costs them and then captures the value.
var beerPackOf12Price = prompt("How much does a 12 pack of beer cost you?");

// This is calculating how much the user spends a year on beer bottles.
var yearlyCostOfBeerBottles = yearlyBeerBottlesNumber / 12 * beerPackOf12Price;

// This alerts the user to the amount they spend per year on beer bottles. The yearly cost has been fixed to only include 2 decimal places. 
alert(name + ", you spend $" + yearlyCostOfBeerBottles.toFixed(2) + " per year on bottles of beer. \n\nCheers again!");

// This reports to the console the amount the user spends a year on beer bottles. 
console.log(name + " spends $" + yearlyCostOfBeerBottles.toFixed(2) + " a year on beer bottles.");
