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

// oranges and track how many we have

var orangeBins = [12, 20, 14];

// How many oranges did we pick in total?
var total = orangeBins[0] + orangeBins [1] + orangeBins[2];
console.log("The total number of orange bins collected is "+total);

// Advanced Array

var fruitBowl = ["Orange", "Tomato", "Strawberry"];

// Property - Length - How many items are in the array

console.log(fruitBowl.length + "items in our fruit bowl");

// Method of Arrays

// Push - insert an item at the end of our array
// arrayName.push(item to push);

fruitBowl.push("apple");

// See fruit bowl
console.log(fruitBowl);

// Push another fruit
fruitBowl.push("Kiwi");
console.log(fruitBowl);

// pop - takes off the last item of an array AND returns it
// arrayName.pop();

fruitBowl.pop();
console.log(fruitBowl);



// Create a variable to "catch" the return value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);

// Splice - used for removing or adding items into an existing array
// arrayName.splice(index position to start from, # of items to remove, # items to add);

fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);


// Add more items
fruitBowl.splice(1,0,"Grapes","Tangerine","Mango");
console.log(fruitBowl);








