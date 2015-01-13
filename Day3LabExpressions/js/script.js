/*
 Michael Sgrosso FSS# 63757
 1/101/2015
 Campus SDI
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

var week1 = 154.65;
var week2 = 74.75;
var week3 = 83.25;
var week4 = 123.55;
var week5 = 65.95;

var totalSpent = week1 + week2 + week3 + week4 + week5; // Find total spent for 5 weeks
var avgSpentWeek = totalSpent/5; // Find average spent per week

// Round decimal to 3 places
avgSpentWeek = avgSpentWeek.toFixed(3);


// Display total amount spent and average spent per week
console.log("You have spent a total	of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + avgSpentWeek + " per week");

// Discounts
// Declare and define variables

var origPrice = 30.00; // Original price
var discountPercent = .1; // discount percentage
var itemDescription = "Top round roast";
var taxPercent = .06; // tax percentage

var priceNoTax = origPrice - (origPrice * discountPercent); // Find discounted price pre tax
var priceWithTax = priceNoTax + (priceNoTax * taxPercent); // Find discounted price post tax

// Display original price, discount percentage, discounted price without tax and discounted price with tax
console.log("Your " + itemDescription + "was originally $" + origPrice + ", but after a " + (discountPercent * 100)  + "% discount, it is now $" + priceNoTax + " without tax, and $" + priceWithTax + " with tax");










