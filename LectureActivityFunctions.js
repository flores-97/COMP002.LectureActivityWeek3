let myName = "Victor";

let greetingFunc = "Hello, " + myName; {
    console.log("Hello, " + myName);
}


//*********************************** 

const pi = 3.14;

function circumference(pi , radius){
    return pi * radius;
}

console.log(pi * 10);

//*********************************** 

function helloFrom() {
    console.log("Hello from....");
}

function theOtherSide() {
    helloFrom();
    console.log("the other side!")
    
}

helloFrom();
theOtherSide();

//*********************************** 
// 4. I changed the order that so that my output is "Hello from ...." first so that it makes sense. Initially it would sandwich "the other side!" because it would execute the second function then call the first function

//*********************************** 

const startFire = () => {
    return extFire();
};

const extFire = () => {
    return startFire();
};

console.log(startFire( ));