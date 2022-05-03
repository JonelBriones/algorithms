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

// Print and Count

function multiplesOfFive() {
    let count = 0;
    for(let i = 512; i <= 4096; i++) {
        if(i%5 === 0) {
            count++;
            console.log(`${i} is the ${count} count`)
        }
    }
    return count;
}
// multiplesOfFive()

// Multiples of six

function multipleOfSix() {
    var i = 0;
    while(i <= 60000) {
        if(i%6===0) {
            console.log(i);
        }
        i++;
    }
}
// multipleOfSix()

// counting the dojo way

function codingDojo() {
    for(let i = 0; i <= 100; i ++) {
        if(i%5===0) {
            console.log("Coding")
        }
        else console.log("Dojo")
    }
}
// codingDojo()

// what do you know?

function myParam(param) {
    console.log(param)
}

// myParam('Jonel')

// Whoa, that sucker's huge

function printOdd() {
    let sum = 0;
    for(let i = -300000; i <= 300000; i++) {
        if(i%2===1) {
            sum = sum + i;
        }
    }
    console.log(sum)
    return sum
}

printOdd()