/*
 Michael Sgrosso
 SDI Campus
 1/13/2015
 Day 4 Prompting
 */


//alert("Testing for connection to html file");

// Ask user for input - prompt();

// prompt("Enter your year of birth");

// Save user response - by creating a variable
var birthYear = prompt("Enter your year of birth");
console.log(birthYear);


// Calculate area of a rectangle
// area = length * width

// Create 2 variable and prompt the user length and width

var length = prompt("Let's calculate the area of a rectangle. \n please enter the length of the rectangle");

var width = prompt("Please enter the width of the rectangle");

// Calculate area
var areaRect = length * width;
console.log("The area of you rectangle is" + areaRect);
console.log("The area of your rectangle with a length of " +length+  " and a width of " +width+ " is " +areaRect);

