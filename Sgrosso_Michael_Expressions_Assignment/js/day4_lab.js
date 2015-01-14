/*
 Michael Sgrosso
 SDI Campus
 1/13/2015
Day 4 Lab Expression Assignment
 */


//alert("Testing for html connection");

// Blood alcohol content calculator

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






