/*
Vanessa Marrero
May 29, 2014
Functions Assignment
*/

// This is the welcome message users receive.
var greet = "Hello! \n\nWelcome to my personal calculator!";

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

// This explains to the user what we are calculating.
var explain = "Thank you " + n + "! \n\nWe're going to be calculating your body mass index (BMI) in order to figure out under which classification your weight falls into - Underweight, Normal, Overweight, or Obese.";

// This is the alert with the calculator explanation.
alert(explain);

// This explains to the user what is body mass index.
var bmiExplain = n + ", a person's body mass index is a measure of body fat based on an individual's height and weight. \n\nDoctors use BMI to determine the healthiness of an individual's weight.";

// This is the alert with the explanation of bmi.
alert(bmiExplain);

// This is the message asking for and storing the user's weight.
var w = prompt("How many pounds (lbs) do you weigh?");

// The following validates the weight of the user.
while (isNaN(w) || w < 1) {
    alert("You need to put POSITIVE NUMBERS for your weight! \n\nYou CANNOT leave the box EMPTY or put 0 or negative numbers for your weight!");
    var w = prompt("Enter your weight in pounds (lbs) using NUMBERS.");
}

// This is the message asking for and storing the user's height.
var h = prompt("How tall are you in inches (in)?");

// The following validates the height of the user.
while (isNaN(h) || h < 1) {
    alert("You need to put POSITIVE NUMBERS for your height! \n\nYou CANNOT leave the box EMPTY or put 0 or negative numbers for your height!");
    var h = prompt("Enter your height in inches (in) using NUMBERS.");
}

// This reports the user's name to the console. 
console.log("The user's name is " + n + ".");
    
// This reports the user's weight to the console. 
console.log("The user's weight is " + w + " pounds (lbs).");

// This reports the user's height to the console. 
console.log("The user's height is " + h + " inches (in).");

// This is the bmi function with 3 given parameters.
function bmi(name, weight, height) {
    
// This is calculating the bmi and storing it into a variable. This is the set standard formula; it cannot be changed.
    var bmiResult = (weight / (height * height)) * 703;
   
//These are the weight classification for bmi. Depending on the user's bmi, the corresponding message will be sent to the console and alerted to the user.
    if (bmiResult > 29.99) {
        console.log("The user is considered obese.");
        alert(name + ", you are considered obese. \n\nYou should consult with your physician on a diet and exercise plan.");
    } else if (bmiResult > 24.99) {
        console.log("The user is considered overweight.");
        alert(name + ", you are considered overweight. \n\nYou should work on losing a few pounds.");
    } else if (bmiResult > 18.49) {
        console.log("The user is considered at a normal weight.");
        alert(name + ", you are considered normal weight. \n\nYou should continue to maintain your weight.");
    } else {
        console.log("The user is considered underweight.");
        alert(name + ", you are considered underweight. \n\nYou should probably bulk up a few pounds.");
    }
    
//This is returning the bmiResult outside of the function.
    return bmiResult;
  
}

//This is capturing the bmiResult in a new variable so that it can be used outside of the function. Also, is calling the function and sending 3 arguments to use with its given parameters.
var results = bmi(n, w, h);

//This reports the user's BMI to the console. BMI has been fixed to only include up to 2 decimal places. 
console.log("The user's body mass index (BMI) is " + results.toFixed(2) + ".");

//This alerts the user of their BMI. BMI has been fixed to only include up to 2 decimal places. 
alert(n + ", your body mass index (BMI) is " + results.toFixed(2) + ".");