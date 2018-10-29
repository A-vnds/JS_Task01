// Writing expressions with variables Exercise 1,2,3


let myName = 'Socrates';
let myAge = 99;
let ignasiAge = 32;

let ageDiff = myAge - ignasiAge;
console.log(ageDiff);


// Writing code with conditionals Exercise 4,5


if (myAge > 21) {
    console.log("You are older than 21");
} else {
    console.log("You are younger than 21");
};


if (myAge > ignasiAge) {
    console.log("I am older than Ignasi");
} else if (myAge === ignasiAge) {
    console.log('You have the same age with ignasiAge');
} else {
    console.log('Ignasi is older than you');
}

// Sorting an Array Exercise 1

//let classNamesAB = classNames.sort();
//console.log(classNames);


let classNames = ['Adam', 'Andras', 'Socrates', 'Leo', 'Jae', 'John', 'Pol', 'Mari'];


function sortArray(arr) {
    let classNamesAB = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[i] && !classNamesAB.includes(arr[j])) {
                classNamesAB.push(arr[j]);
            }
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (!classNamesAB.includes(arr[i])) {
            classNamesAB.push(arr[i]);
        }
    }
    return classNamesAB;
}


console.log(sortArray(classNames));



// Looping over an array Exercise 2


let classAge = [30, 23, 19, 30, 32, 33, 23, 28];

for (let i = 0; i < classAge.length; i++) {
    console.log(classAge);
}

for (let i = 0; i < classAge.length; i++) {
    if ((classAge[i] % 2) === 0) {
        console.log(classAge[i]);
    }
}


// Functions that use arrays Exercise 3,4, 


/* Function.prototype.apply() allows you to call a function with a given 'this' value and an array of arguments. Passing the numbers array as the second argument of apply() results in the function being called with all values in the array as parameters. */
// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));


let numbers = [3, 12, 14, 16, 18, 21, 29];

let maxNum = 0;


function maxValue(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > maxNum) {
            maxNum = a[i];
        }
    }
    console.log(maxNum);
}

maxValue(numbers);


let minNum = 0;

function minValue(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > minNum) {
            minNum = a[i];
        }
    }
    console.log(minNum);
}

minValue(numbers);



/* A simpler, ES2015 way of accomplishing this is with the new spread operator.This operator causes the values in the array to be expanded, or “spread”, into the function’s arguments. */


var arrayNumbers = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...arrayNumbers));
console.log(Math.min(...arrayNumbers));



// Functions that use arrays Exercise Exercise 5


let array = [3, 6, 67, 6, 23, 12, 99, 100];
let index = 4



function indexOfArray(arr, ind) {
    console.log(arr[ind]);
}

indexOfArray(array, index);


// Functions that use arrays Exercise Exercise 6


let newArray = [3, 6, 67, 6, 23, 11, 100, 8, 23, 93, 0, 17, 24, 7, 1, 33, 45, 93, 28, 33, 23, 12, 99, 0, 100];

let arrayDupls = [];

//Write a function which receives an array and only prints the values that repeat.  

function findDupl(a) {
    for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= a.length; j++) {
            if (i != j && a[i] == a[j]) {
                arrayDupls.push(a[i]);
            }
        }
    }
    return false;
}


findDupl(newArray);
console.log(arrayDupls); // prints [6, 6, 23, 23, 100, 23, 23, 93, 0, 33, 93, 33, 23, 23, 0, 100]



// Functions that use arrays Exercise Exercise 7


//Write a simple JavaScript function to join all elements of the following array into a string. 


/*
The array.join() method is an inbuilt function in JavaScript which is used to join the elements of an array into a string.The elements of the string will be separated by a specified separator and its default value is comma(, ). */

let myColor = ["Red", "Green", "White", "Black"];

let myFavColors = myColor.join(", ");

console.log(myFavColors);


// STRING FUNCTIONS 


/* Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423 */


let x = 32443;


function reverseNumber(a) {
    let output = [];
    let sNumber = x.toString();
    for (var i = 0; i < sNumber.length; i++) {
        output.push(+sNumber.charAt(i));
    }
    let reversedX = output.reverse();
    console.log(reversedX.join(''));
}

reverseNumber(x);

/* Exercise 2: Write a JavaScript function that returns a string in alphabetical order. For example, if x = 'webmaster' then the output should be 'abeemrstw'.  Punctuation and numbers aren't passed in the string. */


let y = 'webmaster';


function sortString(a) {
    let newWord = '';
    newWord = a.split('').sort().join('');
    console.log(newWord);
}


sortString(y);


/* Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. For example, if x = "prince of persia" then the output should be "Prince Of Persia". */


let z = 'prince of persia';
let abc = 'socrates avenidis';
let xyz = 'one more time';


function firstLetterCap(a) {
    let arr = a.split(' ');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    console.log(newArr.join(' '));
}

firstLetterCap(abc);
firstLetterCap(z);
firstLetterCap(xyz);



/* Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, if x = "Web Development Tutorial", then the output should be "Development". */


let randomPhrase = "Web Development Tutorial";


function findLongestWord(str) {
    let arr = str.split(' ');
    let counter = 0;
    let longestWord = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > counter) {
            counter = arr[i].length;
            longestWord = arr[i];
        }
    }
    console.log(longestWord);
}

findLongestWord(randomPhrase);
