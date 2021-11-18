/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(2, 5);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);

saySomething('Hi, Peoples');

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines

const returnMunltipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMunltipleLines());