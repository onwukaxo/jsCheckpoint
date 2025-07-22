// ============================
// STRING MANIPULATION FUNCTIONS
// ============================

// ✅ Reverse a String
function reverseString(str) {
    let reversed = ""; // Initialize an empty string to build the reversed result

    // Loop from the last character to the first
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Add each character to the reversed string
    }

    return reversed; // Return the reversed string
}

console.log(reverseString("darlington")); // Output: "notgnilrad"


// ✅ Count Characters in a String
function characterCount(str) {
    return str.length; // Use the built-in length property to count characters
}

console.log(characterCount("darlington")); // Output: 10


// ✅ Capitalize First Letter of Each Word
function capitalFirstLetter(sentence) {
    let word = sentence.split(" "); // Split sentence into words
    let capitalLetter = [];         // Array to hold capitalized words

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letter.length > 0) {
            // Capitalize the first letter and add the rest of the word
            let capital = letter[0].toUpperCase() + letter.slice(1);
            capitalLetter.push(capital);
        } else {
            // Handle empty spaces or double spaces
            capitalLetter.push(letter);
        }
    }

    return capitalLetter.join(" "); // Join the words back into a sentence
}

console.log(capitalFirstLetter('darlington is a very good boy')); 
// Output: "Darlington Is A Very Good Boy"



// ============================
// ARRAY FUNCTIONS
// ============================

// ✅ Find Maximum and Minimum in an Array
function findMinMax(numbers) {
    // Use spread syntax with Math.min and Math.max
    return [Math.min(...numbers), Math.max(...numbers)];
}

console.log(findMinMax([15, 2, 5, 99, 0])); // Output: [0, 99]


// ✅ Sum of All Elements in an Array
function arraySum(arr) {
    let sum = 0; // Start with zero

    // Add each element to the sum
    for (let i = 0; i < arr.length; i++) {     
        sum += arr[i];
    }

    return sum; // Return the total
}

console.log(arraySum([200, 5, 10])); // Output: 215


// ✅ Filter Array: Remove String Elements
function strFilter(arr) {
    // Keep only non-string elements
    return arr.filter(item => typeof item !== "string");
}

console.log(strFilter([1, "apple", 5, "banana", true])); // Output: [1, 5, true]



// ============================
// MATHEMATICAL FUNCTIONS
// ============================

// ✅ Factorial of a Number
function factorial(number) {
    let result = 1;

    // Multiply numbers from 1 to the given number
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result; // Return the factorial result
}

console.log(factorial(5)); // Output: 120


// ✅ Prime Number Check
function primeNumber(number) {
    // Prime numbers must be greater than 1
    if (number <= 1) {
        return false;
    }

    // Check for any divisors from 2 to number / 2
    for (var i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false; // Not a prime if divisible by any number
        }
    }

    return true; // If no divisors found, it is a prime
}

console.log(primeNumber(7));  // true
console.log(primeNumber(15)); // false


// ✅ Fibonacci Sequence Generator
function Fibonacci(n) {
    var fib = []; // Array to store Fibonacci numbers
    var i;

    if (n <= 0) {
        return fib; // Return empty array for 0 or negative input
    }

    fib[0] = 0; // First term is always 0

    if (n === 1) {
        return fib; // Return [0] if only 1 term requested
    }

    fib[1] = 1; // Second term is 1

    // Generate the sequence from the 3rd term onward
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Sum of previous two terms
    }

    return fib; // Return the full sequence
}

console.log(Fibonacci(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
