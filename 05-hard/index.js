"use strict";
//Q=31
// Develop a function that takes two inputs, a string and a character,
// and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
let str = "My name iS saba mushtaq";
let char = "a";
console.log("\n Number of occurrences of '" + char + "' in '" + str + "':", countOccurrences(str, char));
//Q=32Create a 'to-do list' array of objects where each object has properties task and completed (a boolean).
// Write a function to log only the tasks that are not yet completed.
// to-do list array of objects
let todoList = [
    { task: "Complete project", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Call mom", completed: false },
    { task: "Exercise", completed: true },
    { task: "Read a book", completed: false },
];
// Function to log tasks that are not yet completed
function logIncompleteTasks(todoList) {
    console.log("Incomplete tasks:");
    todoList.forEach(function (item) {
        if (!item.completed) {
            console.log("- " + item.task);
        }
    });
}
logIncompleteTasks(todoList);
//Q=33
// Write a function that takes an array of integers and sorts
//      them from smallest to largest.
function sortIntegers(integers) {
    integers.sort(function (a, b) {
        return a - b; // this comparson function sorts number in ascending order
    });
    return integers;
}
let integers = [4, 2, 7, 1, 5];
console.log("\n Original array:\n", integers);
console.log("\n Sorted array:\n", sortIntegers(integers));
// Q.34. Develop a TypeScript program that logs every element of an array in
// reverse order without using the .reverse() method.
function reverseArray(array) {
    let reverseedarray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseedarray.push(array[i]);
    }
    return reverseedarray;
}
const array = [1, 2, 3, 4, 5];
console.log("\nOriginal array:\n");
console.log(array);
let reverseedarray = reverseArray(array);
console.log("\nReversed array:\n", reverseedarray);
// Q.35. Write a script that simulates a basic calculator. It should take two operands and
// an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
function basicCalculator(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2;
        case "*":
            return operand1 * operand2;
        case "/":
            if (operand2 === 0) {
                return "Error: Division by zero";
            }
            return operand1 / operand2;
        default:
            return "Error: Invalid operator";
    }
}
const operand1 = 10;
const operand2 = 5;
const operator = "+";
const result = basicCalculator(operand1, operand2, operator);
console.log(`The result of ${operand1} ${operator} ${operand2} is ${result}`);
