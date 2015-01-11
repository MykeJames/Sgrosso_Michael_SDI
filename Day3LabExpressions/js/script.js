/*
 Michael Sgrosso FSS# 63757
 1/101/2015
 SDI
 Day 3 Lab Expressions
 */

// Slice of pie part 1
// How many slices of pizza will each person at the party get, with the given data?

// Declare variables

var slicesPerPie; // number of slices per pizza
var numberOfPeople; // number of people
var pizzasOrdered; // number of pizzas ordered
var slicesPerPerson; // number of slices for each person


// Slice of pie part 2

// Declare and define variables
var slicesPerPie = 8; // number of slices per pizza
var numberOfPeople = 10; // number of people
var pizzasOrdered = 4; // number of pizzas ordered
var slicesPerPerson = (slicesPerPie * pizzasOrdered) / numberOfPeople; // number of slices per person


var sparkySlices = (slicesPerPie * pizzasOrdered)%numberOfPeople; //number of slices sparky gets to eat

// console.log(slicesPerPerson);

// Display number of slices sparky gets to eat
console.log("Sparky got" +" "+ sparkySlices +" "+ "slices of pizza.");








