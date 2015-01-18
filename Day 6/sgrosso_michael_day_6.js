// alert("JavaScript works!");

/*
Michael Sgrosso
SDI Campus 1501
1/17/2015
Day 6 class assignment
 */

// Is my steak done?

/*
 *120 and under is undercooked
 *120 - 124 - Steak is rare
 *125 - 129 - Steak is medium-rare
 *130 - 139 - Steak is medium
 *140 - 149 - Steak is meium-well
 *150 - 165 - Steak is well done
 *>165 is bunt
 */

/*
var steakTemp = 345;
var steakDone;

if (steakTemp < 120) {
    steakDone = "Not done"
    //console.log("Steak is not cooked");
} else if (steakTemp <= 124) {
    steakDone = "Rare";
} else if (steakTemp <= 129) {
    steakDone = "Medium-rare";
} else if (steakTemp <= 139) {
    steakDone = "Medium";
} else if (steakTemp <= 149) {
    steakDone = "Medium-well";
} else if (steakTemp <= 165) {
    steakDone = "Well done"
} else {
    steakDone = "Burnt"
}

console.log("The steak is " + steakDone +".");


// Problem solving

 //get outside air temp
 
var airTemp = parseInt(prompt("What is the temperature outside?" , "65"));


// Create the variable for water temperature
var waterTemp;

// Conditional to see what we are doing

if (airTemp >= 85) {
    console.log("Let's go to the beach");
    waterTemp = parseInt(prompt("What's the temperature of the water?" , "75"));
   
    if (waterTemp >= 75) {
        console.log("Let's go in the water");
    } else {
        console.log("Let's build a sand castle");
    }
} else {
    console.log("We are going to thw movies");
}
*/

// round()
// Normal rounding .5 and up

var num1 = 9.54444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);

// floor(x)
// Returns x, rounded down to the nearest integer or whole number

var num2 = 6.1;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

// ceil(x)
//  Return X rounded up to the next integer / whole number

var num3 = 4.8888;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

// random()
// Returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log(num4);

// Random number between two numbers
// Math.random() * (max-min) + min
var num5 = Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);


var arrOfItems = ["Chips Ahoy", "Oreos" , "EL Fudge" , "Thin Mints"]

var randomCookie = Math.floor(Math.random() * arrOfItems.length - 1);

console.log("My current favorite is " + arrOfItems[randomCookie]);

console.log(Math.PI);
console.log(Math.ceil);






