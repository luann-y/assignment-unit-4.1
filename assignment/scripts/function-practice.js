console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// const greeting = helloName('LuAnn');
console.log(helloName('LuAnn'));

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber) {
  // return firstNumber + secondNumber;
}

function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

// let totalAdded = addNumbers(4,29);
console.log ('4 + 29 =', addNumbers(4, 29));


// 4. Function to multiply three numbers & return the result

function multiplyThree (firstNum, secondNum, thirdNum) {
  return firstNum * secondNum * thirdNum;
}

// const answer = multiplyThree(19, 92392, 3843);
console.log('19 x 92392 x 3843 =', multiplyThree(19, 92392, 3843));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
// function isPositive(number) {

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log('Is 32 a positive number?', isPositive(32));
console.log('Is -12 a positive number?', isPositive(-12));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`

function getLast(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array.pop();
}

console.log('My Original Array = [12, 432, 94, 2, 1]');
console.log('My Last Number in the Array=', getLast([12, 432, 94, 2, 1]));
console.log('Empty Array', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find(value, array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
    else {
      return false;
    }
  }
}


// let findTheValue= find(23, [23, 9, 2, 499, 0, 328]);
console.log('Is 23 in the array of [23, 9, 2, 499, 0, 328]?', find(23, [23, 9, 2, 499, 0, 328]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
