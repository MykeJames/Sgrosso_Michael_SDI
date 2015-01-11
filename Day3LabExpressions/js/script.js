/*
 Michael Sgrosso FSS# 63757
 1/101/2015
 SDI
 Day 3 Lab Expressions
 */

// Slice of pie part 1
// How many slices of pizza will each person at the party get, with the given data?

// Declare and define variables

var slicesPerPie = 8; // number of slices per pizza
var numberOfPeople = 10; // number of people
var pizzasOrdered = 4; // number of pizzas ordered
var slicesPerPerson = (slicesPerPie * pizzasOrdered) / numberOfPeople; // number of slices per person

// Display number of slices each person gets to eat
console.log("Each person ate " + slicesPerPerson +" "+ "slices of pizza.");

// Slice of pie part 2
//number of slices sparky gets to eat
var sparkySlices = (slicesPerPie * pizzasOrdered)%numberOfPeople;

// Display number of slices sparky gets to eat
console.log("Sparky got" +" "+ sparkySlices +" "+ "slices of pizza.");


// Average shopping bill
// Calculate the average cost of shopping for the last five weeks

// Declare and define variables

var week1;
var week2;
var week3;
var week4;
var week5;

var totalSpent;
var avgSpentWeek;

// Discounts

var origPrice;
var discountPercent;
var itemDescription
var taxPercent;









