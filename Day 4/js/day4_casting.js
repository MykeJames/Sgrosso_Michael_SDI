/*
 Michael Sgrosso
 SDI Campus
 /2015
 Title
 */


//alert("Testing for work");

// Casting one variable type to be another variable type
var stringvar = "6";
var results = 7 + stringvar;
console.log(results);

// Number (variable or value to cast) - treats anything inside of the () as a number

var castingResults = 7 + stringvar;
console.log(castingResults);

// String() - anything inside () is treated as a text string
var areaCode = 407;
var prefix = 203;
var suffix = 1234;

var phoneNumber = String(areaCode) + String(prefix) + String(suffix);
console.log(phoneNumber);

var phoneNumber2 = "("+String(areaCode)+")" + String(prefix) + "-" + String(suffix);
console.log(phoneNumber2);

var phoneNumber3 = "("+(areaCode)+")" + (prefix) + "-" + (suffix);
console.log(phoneNumber3);

// Parsing Integers
// ParseInt() - it looks through a text string and returns an integer
// Only the first number in the string is returned.
// Text string has to start with a number
// Leading and trailing spaces are allowed
// If it can't find the integer then it returns Nan
// Nan - Not a Number

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("I am 40 years old");
console.log (b);

var c = parseInt("40 years old");
console.log(c);

// Prompts only return strings

var shoesHad = prompt("How many pairs of shoes did you own before?");

var shoesBought = prompt("How many pairs of shoes did you buy?");

// Add shoesHad plus shoesBought for total number of shoes

var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
console.log(totalShoes);













