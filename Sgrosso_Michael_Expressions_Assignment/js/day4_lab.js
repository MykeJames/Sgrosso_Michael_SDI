
/*
 Michael Sgrosso
 SDI Campus
 1/13/2015
Day 4 Lab Expression Assignment
 */

//alert("Testing for html connection");

// Blood Alcohol Content calculator

// Define and declare variables
// Prompt user for required information - ( Number of drinks, time drinking, users weight in pounds)
var drinkQty = prompt("How many drinks have you consumed?");
var hours = prompt("How many hours have you been drinking?");
var weight = prompt("Please enter your weight in pounds");

// Define array for variable values
var userData = [drinkQty, weight, hours]

// Define a variable and equation using array items and at least 2 assignment operators
var bac = (userData[0] * 0.06 * 100 * 1.055);

bac /= userData[1]; // division equals

bac -= (userData[2] * 0.015); // minus equals

// Limit result to 2 decimal places
bac = bac.toFixed(2);

// Return data entered and result
console.log("You have consumed " + drinkQty + " drinks over a period of " + hours + " hours \n Your Blood Alcohol Content is approximately " + bac + " You should NOT drive with a BAC above 0.05");

/*
 Test scenarios:

 I entered 2 for How many drinks, 3.5 for how many hours and 165 for weight in pounds,	my calculator gave me:
 "You have consumed 2 drinks over a period of 3.5 hours
 Your Blood Alcohol Content is approximately 0.02 You should NOT drive with a BAC above 0.05"


 I entered 3 for How many drinks, 4 for how many hours and 165 for weight in pounds, my calculator gave me:
 "You have consumed 3 drinks over a period of 4 hours
 Your Blood Alcohol Content is approximately 0.06 You should NOT drive with a BAC above 0.05"


 I entered 6 for How many drinks, 2 for how many hours and 187 for weight in pounds, my calculator gave me:
 "You have consumed 6 drinks over a period of 2 hours
 Your Blood Alcohol Content is approximately 0.17 You should NOT drive with a BAC above 0.05"
 */




