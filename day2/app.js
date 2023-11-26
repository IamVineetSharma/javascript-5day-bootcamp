
// 1
function checkNumberSign(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else
   
  if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

checkNumberSign(5); // Output: The number is positive.
checkNumberSign(-2); // Output: The number is negative.
checkNumberSign(0); // Output: The number is zero.

// 2

function factorial(number) {
    if (number < 0) {
      throw new Error("Invalid input: Please provide a positive integer.");
    }
  
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

console.log(factorial(5)); // Output: 120
console.log(factorial(10)); // Output: 3628800

// 3

function findLargerNumber(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "The numbers are equal.";
    }
  }

console.log(findLargerNumber(5, 2)); // Output: 5
console.log(findLargerNumber(10, 10)); // Output: The numbers are equal.
console.log(findLargerNumber(2, 10)); // Output: 10

// 4 
function isPalindrome(str) {
    // Convert the string to lowercase and remove all spaces, punctuation, and special characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the reversed string is the same as the original string
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
  }

console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false

// 5

function checkPrimeNumbers(n) {
    if (n <= 1) {
      return;
    }
  
    for (let num = 2; num <= n; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        console.log(num);
      }
    }
  }

checkPrimeNumbers(10); // Output: 2, 3, 5, 7
checkPrimeNumbers(20); // Output: 2, 3, 5, 7, 11, 13, 17, 19

// 6

function calculate(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    } else if (operator === '*') {
      return num1 * num2;
    } else if (operator === '/') {
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return num1 / num2;
    } else {
      throw new Error('Invalid operator. Please use +, -, *, or /.');
    }
  }

const result = calculate(10, 5, '+');
console.log(result); // Output: 15

const result2 = calculate(12, 4, '-');
console.log(result2); // Output: 8

const result3 = calculate(7, 3, '*');
console.log(result3); // Output: 21

const result4 = calculate(16, 4, '/');
console.log(result4); // Output: 4

// 7
function countVowels(str) {
    // Convert the string to lowercase
    const lowerStr = str.toLowerCase();
  
    // Create a set of vowels
    const vowels = new Set('aeiou');
  
    // Initialize a counter for vowels
    let vowelCount = 0;
  
    // Iterate through the string and check if each character is a vowel
    for (const char of lowerStr) {
      if (vowels.has(char)) {
        vowelCount++;
      }
    }
  
    // Return the vowel count
    return vowelCount;
  }

const vowelCount = countVowels('Hello, World!');
console.log(vowelCount); // Output: 3

// 8

function isPerfectNumber(n) {
    if (n <= 1) {
      return false; // A perfect number cannot be less than or equal to 1
    }
  
    let sumOfDivisors = 1; // Initialize the sum of divisors with 1, as 1 is always a divisor of any number
  
    for (let i = 2; i <= Math.sqrt(n); i++) { // Iterate from 2 to the square root of n, as the divisors of a number cannot be greater than its square root
      if (n % i === 0) {
        sumOfDivisors += i; // Add the divisor (i) to the sum
  
        if (i !== n / i) { // If i is not equal to n/i (i.e., the divisor is not paired), add the paired divisor (n/i)
          sumOfDivisors += n / i;
        }
      }
    }
  
    return sumOfDivisors === n; // Check if the sum of divisors is equal to the number itself
  }

const isPerfect1 = isPerfectNumber(6); // Returns true
console.log(isPerfect1); // Output: true

const isPerfect2 = isPerfectNumber(28); // Returns true
console.log(isPerfect2); // Output: true

const isPerfect3 = isPerfectNumber(496); // Returns true
console.log(isPerfect3); // Output: true

// 9

function fibonacciSeries(n) {
    let fibArray = [0, 1];
  
    for (let i = 2; fibArray[i - 1] + fibArray[i - 2] <= n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  
    console.log("Fibonacci series up to", n, ":", fibArray.join(", "));
  }
  
  // Example usage
  fibonacciSeries(50);

  // 10

  function printMultiplicationTable(number) {
    // Check if the input is a positive integer
    if (Number.isInteger(number) && number > 0) {
      console.log("Multiplication table for", number, ":");
  
      for (let i = 1; i <= 10; i++) {
        console.log(number, "x", i, "=", number * i);
      }
    } else {
      console.log("Please provide a positive integer as input.");
    }
  }
  
  // Example usage
  printMultiplicationTable(7);
  
  