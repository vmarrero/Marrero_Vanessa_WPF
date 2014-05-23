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