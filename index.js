//Question 1: The Age Calculator
console.log("\nQuestion 1: The Age Calculator");
let currentYear = 2022;
let myBirthYear = 1996;

let myAge = currentYear - myBirthYear;
console.log("Your age is " + myAge);
console.log("\n******************************");
//Question 2: Switch statement
console.log("\nQuestion 2: Switch statement");
let myVar = 5;

switch (myVar) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("out of range");
    break;
}
console.log("\n******************************");

//Question 3: even & odd numbers
console.log("\nQuestion 3: even & odd numbers");

let q3var = 6;
if (q3var % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
console.log("\n******************************");

//Question 4: if else grades
console.log("\nQuestion 4: if else grades");

let myGrade = 72;
if (myGrade > 90) {
  console.log("A");
} else if (myGrade > 80) {
  console.log("B");
} else if (myGrade > 70) {
  console.log("C");
} else if (myGrade > 60) {
  console.log("D");
} else {
  console.log("F");
}
console.log("\n******************************");

//Question 5: leap year
console.log("\nQuestion 5: leap year");
let myQ5Year = 2020;
if (myQ5Year % 4 === 0 && myQ5Year % 100 !== 0) {
  console.log(`${myQ5Year} is a leap year.`);
} else {
  console.log(`${myQ5Year} is not a leap year.`);
}
console.log("\n******************************");

//Question 6: For loop Fibonacci
console.log("\nQuestion 6: For loop Fibonacci");
const myFibNumber = 20;
let number1 = 0;
let number2 = 1;
let nextRound;
let FibResult = "";

for (let i = 0; i < myFibNumber; i++) {
  FibResult += number1 + " ";
  nextRound = number1 + number2;
  number1 = number2;
  number2 = nextRound;
}
console.log(FibResult);
console.log("\n******************************");

//Question 7: squares of numbers
console.log("\nQuestion 7: squares of numbers\n");
let sqrResult = "";
for (let i = 1; i <= 10; i++) {
  sqrResult += Math.pow(i, 2) + " ";
}
console.log(sqrResult);
console.log("\n******************************");

//Question 8: Nested for loop
console.log("\nQuestion 8: Nested for loop\n");
for (let i = 1; i <= 5; i++) {
  //   console.log();
  let table = `Multiplication table of ${i}: `;
  for (let j = 1; j <= 10; j++) {
    table += i * j + ",";
  }
  console.log(table + "\n");
}
console.log("\n******************************");

//Question 9: While loop
console.log("\nQuestion 9: While loop\n");
let i = 0;
let whileResult = "";
while (i <= 20) {
  if (i % 2 !== 0) {
    whileResult += i + " ";
  }
  i++;
}
console.log(whileResult);
console.log("\n******************************");

//Question 10: is power of 2
console.log("\nQuestion 10: is power of 2\n");
function isPowerOfTwo(n) {
  if (n == 0) return `${n} is not power of two!`;

  if (
    parseInt(Math.ceil(Math.log(n) / Math.log(2))) ==
    parseInt(Math.floor(Math.log(n) / Math.log(2)))
  ) {
    return `${n} is power of two!`;
  }
  return `${n} is not power of two!`;
}
console.log(isPowerOfTwo(31));
