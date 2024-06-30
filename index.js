//// CHP 6 to 9

//(QUESTION 1)Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your browser:

let a = 10;
document.write(`Result: The value of a is: ${a}<br>`);
document.write(`The value of ++a is: ${++a}<br>`);
document.write(`Now the value of a is: ${a}<br>`);
document.write(`The value of a++ is: ${a++}<br>`);
document.write(`Now the value of a is: ${a}<br>`);
document.write(`The value of --a is: ${--a}<br>`);
document.write(`Now the value of a is: ${a}<br>`);
document.write(`The value of a-- is: ${a--}<br>`);
document.write(`Now the value of a is: ${a}<br>`);


//(QUESTION 2)What will be the output in variables a, b & result after
// execution of the following script:

var x = 2, b = 1;
var result = --x - --b + ++b + b--;
console.log("a = " + x);      
console.log("b = " + b);      
console.log("result is " + result);  



// (QUESTION 3) Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your browser:

let num = parseFloat(prompt("Enter a number:"));
let addition = num + 10;
let subtraction = num - 5;
let multiplication = num * 2;
let division = num / 3;
document.write("<h2>Arithmetic Operations:</h2>");
document.write(`<p>Original Number: ${num}</p>`);
document.write(`<p>Addition (+ 10): ${addition}</p>`);
document.write(`<p>Subtraction (- 5): ${subtraction}</p>`);
document.write(`<p>Multiplication (* 2): ${multiplication}</p>`);
document.write(`<p>Division (/ 3): ${division}</p>`);

//(QUESTION 4)Write a program that takes input a name from user & greet the user.)
let userName = prompt("Enter your name:");
if (userName) {
    alert(`Hello, ${userName}! Welcome.`);
} else {
    alert("Hello! Welcome.");
}

//(QUESTION 5)Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5 should be displayed by default.

let numberInput = prompt("Enter a number to display its multiplication table:");
let number = parseInt(numberInput);
if (isNaN(number)) {
    number = 5;
}
document.write(`<h2>Multiplication Table of ${number}:</h2>`);
document.write("<ul>");
for (let i = 1; i <= 10; i++) {
    document.write(`<li>${number} * ${i} = ${number * i}</li>`);
}
document.write("</ul>");

