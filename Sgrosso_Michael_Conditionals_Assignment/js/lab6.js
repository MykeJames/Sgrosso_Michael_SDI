//alert("JavaScript works!");

/*
Michael Sgrosso
SDI Campus 1501
1/17/2015
Day 6 Lab Conditionals Assignment
 */

// Auto loan calculator

// define vaiables for loan amount, interest rate and loan term, then prompt for user input


var num1;
var num2;
var payment;

var loanAmt     = prompt("Please enter the loan amount in US dollars");
    if (loanAmt === "" || loanAmt === NaN) {
    loanAmt = prompt("Please enter a valid number");
    if ((loanAmt === "" || loanAmt === NaN)) {
        console.log("Your entry is invalid, reload page and start again")
    }
} else {
    












