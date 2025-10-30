//Example of Scope 
let name = "Victor";//var is available in the entire program 

if (name == "Victor")
{
    name = "Flores"; //name is still accessible here
    let helloStatement = "Hello, " + name; //this variable is only accessible inside this code block
    console.log(helloStatement);
} //after the if block completes, the helloStatement is no longer accessible 

//the line below will throw an error because helloStatement no longer exist 
//console.log(helloStatement);

console.log(name);

//************************************************************************************************** 

// 3 ways to declare functions 

//method 1 
const printHelloWorld = function() {
    //activities inside the function block
    console.log("printHelloWorld() called!");
    console.log("Hello");
    console.log("World!");
}; //remember to terminate with ; 

printHelloWorld(); //calls the function printHelloWorld()

//method 2

printHelloWorld2();//calls the function printHelloWorld2
function printHelloWorld2() {
    console.log("printHelloWorld2() is called!");
}//<- this method does not require a semicolon 


//method 3 arrow notation 
const printHelloWorld3 = () => {
    console.log("printHelloWorld3() is called!");

};

printHelloWorld3();

//******************************************************************************** 

//Functions with a parameter

function printHelloWorld4(name) {
    console.log("Hello, " + name);
} //scope note the variable 'name' no longer exist when the function

printHelloWorld4("Jonathan");
printHelloWorld4("Victor");
printHelloWorld4("Brandon");
printHelloWorld4("Zachary");
printHelloWorld4("Sam");
printHelloWorld4("Jeanne");
printHelloWorld4("Kameron");
printHelloWorld4("Evan");

//function with multiple parameters
function printHelloWorld5(name1, name2, name3, name4, name5) {
    console.log(`Hello, ${name1}, ${name2}, ${name3}, ${name4}, ${name5}`)
}
printHelloWorld5("John", "Jane", "Smith", "Doe", "Mario")


//***************************************************************** 
//string output options (single-quotes, double-quotes, backticks)

let someVariable = "test";
console.log('hello, ' + someVariable);
console.log("hello, " + someVariable);
console.log(`hello, ` + someVariable);


//functions calling functions 
function printHelloWorld6 () {
    console.log("this is printHelloWorld6()!");
}

function printHelloWorld7 () {
    console.log("This is printHelloWorld7()!")
    printHelloWorld6();
}

printHelloWorld7();
printHelloWorld6();

//***********************************
//recursion 
const factorial = n => {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(5));

//***********************************
//no return vs return value functions


//function sum without a return value
function sum(num1, num2) {
    console.log(num1 + num2);//prints the value of num1 and num2 but does not return the value.
}

//function with a return value
function difference(num3, num4) {
    return num3 - num4; //returns the difference back
}

sum(2, 10);

console.log(difference(10, 5)); //prints the return value or
let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);


//***********************************
//accessing an array: recall that the strings is just a string of characters.
let input = "mississippi";
console.log
console.log(input[0]); //recall first letter in array
console.log(input[1]); //recall first letter in array
console.log(input[2]); //recall first letter in array
console.log(input[3]); //recall first letter in array
console.log(input[4]); //recall first letter in array
console.log(input[5]); //recall first letter in array
console.log(input[6]); //recall first letter in array
console.log(input[7]); //recall first letter in array
console.log(input[8]); //recall first letter in array
console.log(input[9]); //recall first letter in array
console.log(input[10]); //recall last letter in array


console.log("size of array is: " + input.length)//all arrays know its size

//repeating programmatically 
for (let i = 0; i < input.length; i++) {
    console.log(input[i]); //use square brackets NOT ()
}
