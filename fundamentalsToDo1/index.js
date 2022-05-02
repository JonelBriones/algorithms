const { param } = require("express/lib/request");

// Setting and Swapping

function setSwap(myName,myNumber) {
    let temp = myNumber;
    myNumber = myName
    myName = temp;
    return console.log("myName " + myName,"myNumber " + myNumber);
}
let myName = 'jonel';
let myNumber = 42;
// setSwap(myName,myNumber);

// Print -52 to 1066

function print() {
    for(let i = -53; i <= 1066; i++) {
        console.log(i)
    }
}
// print()   

// Don't worry, be happy

function beCheerful() {
    for(let i = 0; i <= 98; i++) {
        console.log("good morning!")
    }
}
// beCheerful()

// you say it's your birthday
function myBirthday(month,day) {
    if((month === 9 || day=== 9) && (day === 6 || month === 6)) {
        console.log("How did you know?")
    }
    else {
        console.log("Just another day")
    }
}
// myBirthday(6,9) 

// Leap Year

function leapYear(year) {
    if(year%4===0) {
        if(year%100===0 &&year%400===0) {
            console.log(year,"is a leap year!")   
        }
        else if(year%400===0) {
            console.log(year,"is a leap year!")   
        }
        else if(year%100===0) {
            console.log("else if",year + " is not a leap year.")
        }
        else console.log(year,"is a leap year!")   
    }
    else {
        console.log("else 2",year + " is not a leap year.")
    }
}
// leapYear(1704)