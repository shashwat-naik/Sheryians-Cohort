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
/* var username = prompt("Enter your name: ");
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
} */

// Q9
/* var lightSys = prompt("Traffic light color: ").toLowerCase();

if (lightSys === "red") {
  console.log("Stop!");
} else if (lightSys === "yellow") {
  console.log("Get Ready!");
} else if (lightSys === "green") {
  console.log("Go!");
} else {
  console.log("Value entered is invalid");
} */

// Q10
/* var num = Number(prompt("Enter the number you want the table of: "));
for (var i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
} */

// Q11
/* var marks = Number(prompt("Enter your marks: "));

if (marks >= 90 && marks <= 100) console.log("A");
else if (marks >= 80 && marks <= 89) console.log("B");
else if (marks >= 70 && marks <= 79) console.log("C");
else if (marks >= 60 && marks <= 69) console.log("D");
else if (marks >= 0 && marks < 60) console.log("F");
else console.log("Invalid input"); */

// Q12
/* const username = "Shashwat Naik";
const password = "1234";
let Uname = prompt("Username: ").trim;
let Pass = prompt("Password: ").trim;

if (username === Uname && password === Pass) console.log("Login Successfull!");
else console.log("Incorrect username or password."); */

// Q13
/* var num1 = Number(prompt("Number 1: "));
var num2 = Number(prompt("Number 2: "));
console.log("num1 " + num1, "num2 " + num2);

num2 += num1;
num1 = num2 - num1;
num2 = num2 - num1;
console.log("num1 " + num1, "num2 " + num2); */

// Q14
/* let input = prompt("Enter a number: ");
let num = Number(input);

if (isNaN(num)) {
  console.log("Please enter a valid number.");
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
} */

// Q15
/* var num = Number(prompt("Enter a number: "));
var temp = 0;
while (num > 0) {
  var ans = num % 10;
  temp = temp * 10 + ans;
  num = Math.floor(num / 10);
}
console.log("Reversed number:", temp); */

// Q16
/* var num = Number(prompt("Enter a number: "));
var add = 0;
while (num > 0) {
  var ans = num % 10;
  add = add + ans;
  num = Math.floor(num / 10);
}
console.log("Sum of digits: ", add); */

// Q17
/* var word = prompt("Enter a word: ").toLowerCase().replace(/\s/g, "");
var store = "";

for (var i = word.length - 1; i >= 0; i--) {
  store += word.charAt(i);
}
console.log(store);
if (store === word) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
} */

// Q18
/* var word = prompt("Enter a String: ");
var store = "";

for (var i = word.length - 1; i >= 0; i--) {
  store += word.charAt(i);
}
console.log(store); */

// Q19
/* var num1 = Number(prompt("Enter number 1: "));
var num2 = Number(prompt("Enter number 2: "));
var num3 = Number(prompt("Enter number 3: "));

if (num1 === num2 && num2 === num3) {
  console.log("All numbers are equal: " + num1);
} else if ((num1 >= num2 && num1 <= num3) || (num1 >= num3 && num1 <= num2)) {
  console.log("Second Largest: " + num1);
} else if ((num2 >= num1 && num2 <= num3) || (num2 >= num3 && num2 <= num1)) {
  console.log("Second Largest: " + num2);
} else {
  console.log("Second Largest: " + num3);
} */

// Q20 Important
/* var word = prompt("Enter a word: ");
var freq = {};

for (var i = 0; i < word.length; i++) {
  var ch = word[i];
  freq[ch] = (freq[ch] || 0) + 1;
}

for (var i = 0; i < word.length; i++) {
  if (freq[word[i]] === 1) {
    console.log("First non-repeating character:", word[i]);
    break;
  }
} */

// Q21
/* var num = prompt("Enter a number: ");
var count = 0;

for (var i = 0; i < num.length; i++) {
  var digit = Number(num[i]);
  if (digit % 2 == 0) {
    count++;
    console.log(digit);
  }
}
console.log("Number of even digit in the number " + count); */

// Q22
var age = Number(prompt("Enter age: "));
var salary = Number(prompt("Enter salary: "));

if (age < 18) {
  console.log("Not eligible");
} else {
  if (salary >= 50000) {
    console.log("High Salary");
  } else if (salary < 20000) {
    console.log("Low Salary");
  } else {
    console.log("Medium Salary");
  }
}

