// Q1
/* var age = Number(prompt("Enter your age: "));

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
} */

// Q2
/* var num1 = Number(prompt("Enter number 1: "));
var num2 = Number(prompt("Enter number 2: "));

var ans = (num1 + num2) % 2;

if (ans == 0) {
  console.log("Even Sum");
} else {
  console.log("Odd Sum");
} */

// Q3
/* var char = prompt("Enter a single character: ");

if (char.length != 1) {
  console.log(char + " is more than single character.");

} else {
  var check = char.charCodeAt(0);
  if (check >= 65 && check <= 90) {
    console.log(char + " is Uppercase Letter");
  } else if (check >= 97 && check <= 122) {
    console.log(char + " is Lowercase Letter");
  } else {
    console.log(char + " is Not a letter");
  }
} */

// Q4
/* var num1 = Number(prompt("Enter num 1: "));
var num2 = Number(prompt("Enter num 2: "));
var num3 = Number(prompt("Enter num 3: "));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest");
} else {
  console.log(num3 + " is the largest");
} */

// Q5
/* var year = Number(prompt("Enter the year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is Ordinary Year");
} */

// Q6
/* var num1 = Number(prompt("Enter num1: "));
var num2 = Number(prompt("Enter num2: "));
var operator = prompt("Select operator (+, -, *, /):");

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero");
    } else {
      console.log((num1 / num2).toFixed(2));
    }
    break;
  default:
    console.log("Invalid operator");
    break;
} */

// Q7
/* var num = Number(prompt("Enter a number: "));

if (num === 0) {
  console.log("Zero");
} else if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
} */

// Q8
var username = prompt("Enter your name: ");
var time = Number(prompt("Enter the time in 24-hour format (0–23): "));

if (time < 0 || time > 23) {
  console.log("Invalid time entered. Please enter time in 0–23 format.");
} else if (time >= 5 && time < 12) {
  console.log("Good Morning, " + username + "!");
} else if (time >= 12 && time < 17) {
  console.log("Good Afternoon, " + username + "!");
} else if (time >= 17 && time < 21) {
  console.log("Good Evening, " + username + "!");
} else {
  console.log("Good Night, " + username + "!");
}
