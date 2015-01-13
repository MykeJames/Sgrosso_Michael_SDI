/*
Michael Sgrosso
SDI Campus
1/13/2015
Day 4 class assignment
 */

//alert("Testing to see of this is connected");

// Create a basic array

var avengersNames = ["Thor","Captain America","Iron Man"];

// Print to console
console.log(avengersNames);

// Print out a specific item
console.log(avengersNames[1]);

// Switch a team member - iron man for spiderman
avengersNames[2] = "Spider-Man";

console.log(avengersNames);

// Add a team member
avengersNames[3] = "Black Widow";

console.log(avengersNames);

// Use a variable as an index number
var num = 2;
console.log(avengersNames [num]);

// Length property
// dot syntax - fancy for use a period
console.log(avengersNames.length);

// Last index number is the length minus 1

// Next open index number is the length

// Recruit a new team member
avengersNames[avengersNames.length] = "Powerman";
console.log(avengersNames);
