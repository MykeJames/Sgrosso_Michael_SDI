/*
Michael Sgrosso FSS# 63757
1/101/2015
Day 3 Coding
 */

// Single lined comment

// This is an alert
// alert("Testing to see if this is connected");

//Console.log - allows programmers to see information
console.log("This is the console");


// Declare a variable
// Use the keyword of var

var whatever1;    // Declaration of a variable
whatever1 = 42;   // Definition of a variable

console.log(whatever1);

// Declare and define a variable

var a = 2;
console.log(a);

// Simple math

a = a+3;
console.log(a);

var b;
b = a+3;
console.log(b);
console.log(a);

// Find our age
var birthYear = 1973;

// Age is calculated by current year minus birth year
var currentYear = 2015;

var age = currentYear - birthYear;
console.log(age - 1);

// Math
// +,-.*,/

// Find area of a triangle
// 1/2 * base * height
var base = 6.5;
var height = 10.2;

var areaTriangle = .5 * base * height;
console.log(areaTriangle);

// Modulo - %
// Gives the remainder
var remainder = 32%10;
console.log(remainder)

// Find if even or odd
// Modulo by 2 %2
// 1 if it is odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd)

// Assignment Operator
/*
= Assignment
++ Adds 1 to the variable
-- Subtracts 1 from the variable
+= a # Addition Assignment
-= a # Subtraction Assignment
/= a # Division Assignment
*= a # Multiplication Assignment
 */

var counter = 1;
counter++; // counter = counter +1
console.log(counter);

counter--; // counter = counter - 1
console.log(counter);

counter +=3; // counter = counter +3
console.log(counter);

counter -=2; // counter = counter - 2
console.log(counter);

counter /=2; // counter = counter /2
console.log(counter);

counter *=4; // counter = counter *4
console.log(counter);

// String - any text variable
// "is used at the beginning and end of the string"
// Used to distinguish between variable name and random text
// single quotes ' double quotes " are both used, BUT MUST MATCH

var kermit = "Light Green";

var frogName = "kermit";
console.log(frogName);
console.log(kermit);

// Double quote or single quote?
// can use an escaping character \ backslash in front of the appostrophe

var phrase = 'I don\'t know!';
console.log(phrase);

// Multi-lines by using \n - new line character
var phrase2 = "I don't know! \n You never know!";
console.log(phrase2);

// Boolean
// kind of like a light switch - on or off
// true or false - NOT text string

var yes = true;

var nope = false;

// This is not a boolean
var wrong = "true";

// Order of operations
// PEMDAS
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

// Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Average - add and divide by how many there are

var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

// Concatenation - combining text strings
// use the + sign for text and not just numbers

var firstName = "Kermit";
var lastName = "The Frog";

// Concatenate first and last name in to full name
var fullName = firstName +" "+ lastName;

console.log(fullName +" is my favorite muppet");

var d = "6";
var e = "7";

var combine = d+e;
console.log(combine);


// Constant values are always uppercase
var PI = 3.14;

// Round to a decimal place
// toFixed(#) - # is how many decimal places wanted

var num = 5.6734255;
num = num.toFixed(2);
console.log(num);
