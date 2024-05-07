"use strict";
//Q=21
//Write a function calculateProduct that takes an array of numbers and returns the product of all elements
let array = [1, 2, 3, 4, 5];
function calculateProduct(array) {
    if (array.length === 0) {
        return 0;
    }
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}
console.log(calculateProduct(array));
//Q=22
//Develop a function filterByLength that takes an array of strings and a number n.
//The function should return an array containing only the strings that are longer than n characters.
let words = ["apple", "banana", "orange", "kiwi", "pear"];
let minLength = 5;
function filterByLength(strings, n) {
    return strings.filter((str) => str.length > n);
}
let filteredWords = filterByLength(words, minLength);
console.log("Filtered words:", filteredWords);
//Q=23
//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(array2) {
    const duplicateMap = {};
    const duplicates = [];
    array2.forEach((item) => {
        if (duplicateMap[item]) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        }
        else {
            duplicateMap[item] = true;
        }
    });
    if (duplicates.length === 0) {
        console.log("No duplicates found.");
    }
    else {
        console.log("Duplicates found:", duplicates);
    }
}
let array2 = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9];
findDuplicates(array2);
//Q=24
//Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(array3) {
    return array3.map((Number) => Number + 1);
}
let array3 = [2, 3, 4, 5, 6, 7, 8, 9];
let newArray = incrementAll(array3);
console.log(newArray);
//Q=25
//Develop a function countOccurrences that counts how many times a specific element appears in an array.
let array4 = [1, 2, 3, 2, 5, 6, 2, 3, 3, 5, 6, 6, 7, 8];
function countOccurrences(array4, element) {
    let count = 0;
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] === element) {
            count++;
        }
    }
    return count;
}
console.log("Count 2:", countOccurrences(array4, 2));
console.log("Count 3:", countOccurrences(array4, 3));
console.log("Count 5:", countOccurrences(array4, 5));
console.log("count 6:", countOccurrences(array4, 6));
//Q=26
//Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        // Check if the current element is less than the previous one
        if (arr[i] < arr[i - 1]) {
            return false;
            // If so, the array is not sorted in ascending order
        }
        else {
            // If the loop completes without finding unsorted elements, the array is sorted
            return true;
        }
    }
}
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [3, 2, 4, 2, 1, 5, 7, 9];
console.log("Sorted array :", isSorted(arr));
console.log("Unsorted array :", isSorted(arr1));
//Q=27
//Write a function that receives an array of names and formats them into a string separated by commas,
// except for the last two names, which should be separated by "and".
function formatName(name) {
    if (name.length === 0) {
        return "";
    }
    else if (name.length === 1) {
        return name[0];
    }
    else if (name.length === 2) {
        return name.join(" and ");
    }
    else if (name.length >= 3) {
        let allButLastTwo = name.slice(0, -2).join(",");
        let lastTwo = name.slice(-2).join(" and ");
        return `${allButLastTwo},${lastTwo}`;
    }
}
let name2 = ["saba", "iqra", "misbah", "rubaha", "maria"];
let name3 = ["saba", "mushtaq"];
let name4 = ["saba"];
let name5 = [];
console.log("With 0 name", formatName(name5));
console.log("With one name", formatName(name4));
console.log("With two name", formatName(name3));
console.log("With five name", formatName(name2));
// Q.28. Develop a function that converts an array of Fahrenheit
//  temperatures to Celsius and logs the new temperatures.
function fahrenheigtToCelsius(fahrenheit) {
    let celsius = [];
    for (let i = 0; i < fahrenheit.length; i++) {
        const celsiusTemp = (fahrenheit[i] - 32) * (5 / 9);
        celsius.push(celsiusTemp);
    }
    // Log the new Celsius temperatures
    console.log("     Celsius Temperatures:   ");
    console.log(celsius);
}
let fahrenheit = [34, 55, 88, 100];
fahrenheigtToCelsius(fahrenheit);
//Q=.29. Write a function minMaxAverage that takes an array of numbers and
//  returns an object with properties for the minimum, maximum, and average of those numbers.
function minMaxAverage(number) {
    if (number.length === 0) {
        return {
            minium: undefined,
            maximuim: undefined,
            average: undefined,
        };
    }
    let min = number[0];
    let max = number[0];
    let sum = number[0];
    for (let i = 1; i < number.length; i++) {
        sum += number[i];
        if (number[i] < min)
            min = number[i];
        if (number[i] > max) {
            max = number[i];
        }
    }
    let average = sum / number.length;
    return {
        mininuim: min,
        maximuim: max,
        average: average,
    };
}
let number = [1, 2, 3, 4, 5, 6];
let result = minMaxAverage(number);
console.log(result);
// Q.30.Create a function swapElements that swaps two specified
// indices in an array.
function swapElements(arr2, index1, index2) {
    if (index1 < 0 ||
        index1 >= arr2.length ||
        index2 < 0 ||
        index2 >= arr2.length) {
        // if indices are out of bounds, return the orignal arr2
        return arr2;
    }
    // Swapping elements
    const temp = arr2[index1];
    arr2[index1] = arr2[index2];
    arr2[index2] = temp;
    return arr2;
}
const arr2 = [1, 2, 3, 4, 5];
console.log(swapElements(arr2, 1, 3));
