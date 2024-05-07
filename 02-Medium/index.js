"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q=6
//Create a function calculateArea that takes the radius of a
//circle as an input and returns the area of the circle.
function calculateArea(radius) {
    return 3.14 * radius ** 2;
}
let area1 = calculateArea(4);
console.log(area1);
//Q=7
//Write a loop that logs numbers from 1 to 50.
// For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
//loop from 1 to 50
for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("multiple of 3: fizz");
    }
    else if (i % 5 === 0) {
        console.log("multiple of 5: buzz");
    }
    else {
        console.log(i);
    }
}
//Q=8
//Define an array temperatures with at least five different temperatures (numbers).
// Write a script to find and log the highest temperature.
let temperatures = Math.max(23, 40, 33, 37, 45);
console.log("the highest Temperature :", temperatures);
//Q=9
//Create a script that prompts the user to enter their age and then logs whether they are a minor
// (under 18) or an adult.
//let userAge:any = prompt('please enter your age')
let userAge = 24;
if (userAge < 18) {
    console.log("minor");
}
else {
    console.log("adult");
}
//Q=10
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
const array = [2, 4, -6, 8, -8, -4, 5, 9, 6, 3];
const checkpositive = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            console.log("positive number:", i);
            count = count + 1;
        }
        else {
            console.log("minus number:", i);
        }
    }
    return count;
};
console.log("total positive count:", checkpositive(array));
