let name = "Victor";//var is available in the entire program 

if (name == "Victor")
{
    name = "Flores"; //name is still accessible here
    let helloStatement = "Hello, " + name; //this variable is only accessible inside this code block
    console.log(helloStatement);
}//after the if block completes, the helloStatement is no longer accessible 

//the line below will throw an error because helloStatement no longer exist 
console.log(helloStatement);

console.log(name);