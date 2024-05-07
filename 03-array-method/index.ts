//Q=11
//Write a function that takes an array of words and returns a new array containing only the words
//that start with the letter 'a'.
let fruites: string[] = ["apple", "mango", "melon", "peach", "ananas"];
function startWith(word: string[]) {
  return fruites.filter((word) => word.startsWith("a"));
}
let arrayWithA = startWith(fruites);
console.log("word startWith'a':", arrayWithA);

//Q=12
//Create a script that logs the second to last element of an array named fruits.
const fruits = ["apple", "banana", "orange", "grape"];

let secondToLast = fruits[fruits.length - 2];

console.log("Fruits array :", fruits);

console.log("Second to last index fruite :", secondToLast);

//Q=13
//Develop a function that takes an array of numbers and returns a new array with each number squared.
let array: number[] = [1, 2, 3, 4, 5];
function square(array: any[]) {
  return array.map((number) => number * number);
}
console.log("number array:", array);
let square1 = square(array);
console.log("square of number array:", square1);
//Q=14
//Write a JavaScript function that accepts an array and reverses its elements without using the .
//reverse() method. Log the result.
let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseNumber(number: number[]) {
  let reverseNumber: number[] = [];
  for (let i = number.length - 1; i >= 0; i--) {
    reverseNumber.push(number[i]);
  }
  return reverseNumber;
}
console.log("array", number);
let result = reverseNumber(number);
console.log("reverse array:", result);

//Q=15
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the
//score exceeded the maximum score and the number of times it fell below the minimum score
let scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function countAxceedsAndFalls(scores: number[]): void {
  let maxScore: number = scores[0];
  let minScore: number = scores[0];
  let axceedsCount: number = 0;
  let fallsCount: number = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
      axceedsCount++;
    }
    if (scores[i] < minScore) {
      fallsCount++;
    }
  }
  console.log("\nAxceeds count:\n", axceedsCount);
  console.log("\nFalls count \n", fallsCount);
}
countAxceedsAndFalls(scores);
//Q=16
//Create a function that removes all falsey values from an array.
// Falsey values include false, null, 0, "", undefined, and Nan.
function removeFalseyValues(array1: any[]): any[] {
  return array1.filter((value) => !!value);
}
let array1: any[] = [
  0,
  "",
  "Hello",
  undefined,
  "saba",
  null,
  false,
  NaN,
  ",",
  "what are you doing",
];
const filterarray1: any[] = removeFalseyValues(array1);
console.log(filterarray1);

//Q=17
//Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let array2: number[] = [1, 2, 3];
let array3: number[] = [4, 5, 6];
let concatenatedArray: number[] = array2.concat(array3);
console.log(concatenatedArray);
// Q=18. Develop a function called sumOfElements that calculates the sum of
// all elements in an array that are either even or odd, based on a parameter.

let array4: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumOfElements(array4: any[], isEven: boolean): number {
  return array4.reduce((sum, current) => {
    if (isEven && current % 2 == 0) {
      return sum + current;
    } else if (!isEven && current % 2 !== 0) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);
}

console.log("Sum of even :", sumOfElements(array4, true));
console.log("Sum of odd :", sumOfElements(array4, false));
//Q=19
//Create a function that checks whether an element exists in an array.
// If it exists, return the index, otherwise return -1.
let array5: number[] = [1, 2, 3, 5, 7, 8, 10, 15];
let element: number = 12;
function findElement(array5: number[], element: number) {
  for (let i = 0; i < array5.length; i++) {
    if (array5[i] === element) {
      return i;
    }
  }
  return -1;
}
let findElement1 = findElement(array5, element);
let findElement2 = findElement(array5, 9);
console.log(findElement1);
console.log(findElement2);
//Q=20
//Write a function to find and return the smallest number in an array of integers.
let array6: any[] = [4, 5, 3, 7, 8, 9, 1];
function SmallestNumber(array6: any[]) {
  if (array6.length === 0) {
    return null;
  }
  let smallest = array6[0];
  for (let i = 1; i < array6.length; i++) {
    if (array6[i] < smallest) {
      smallest = array6[i];
    }
  }
  return smallest;
}
console.log(SmallestNumber(array6));
