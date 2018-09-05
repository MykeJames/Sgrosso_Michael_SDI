//alert("JavaScript works!");

/*
Michael Sgrosso
SDI Campus 1501
1/17/2015
Day 6 Lab Conditionals Assignment
 */

// Auto loan calculator

// define vaiables for calculations
var num1;
var num2;
var payment;

// define vaiables for loan amount, interest rate and loan term, and prompt for user input
var loanAmt     = prompt("Please enter the loan amount in US dollars"); // prompt for user input
    if (loanAmt === "" || loanAmt === NaN) { //validation for number and entry
        loanAmt = prompt("Please enter a valid number"); // reprompt for invalid entry
        if (loanAmt === "" || loanAmt === NaN) { //revalidate
            console.log("Your entry is invalid, reload page and start again") // second invalid entry console.log
    }
} else {
    var interestRate = prompt("Please enter the interest rate as a percent"); // prompt for user input
    if (interestRate === "" || interestRate === NaN) { //validation for number and entry
        interestRate = prompt("Please enter a valid number"); // reprompt for invalid entry
        if ((interestRate === "" || loanAmt === NaN)) { //revalidate
            console.log("Your entry is invalid, reload page and start again") // second invalid entry console.log
        } else {
            
















