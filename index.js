//Q.1 What is creation phase and execution phase?
// Ans:- During the creation phase, the JavaScript engine prepares the environment for the code to run. This includes creating the global execution context, setting up the scope chain, and declaring variables and functions.

// During the execution phase, the JavaScript engine actually executes the code. This includes executing function calls, evaluating expressions, and executing statements.
// e.g:- 
// let x = 10;  // This statement is executed during the creation phase

// function myFunction() {
//     let y = 20;  // This statement is executed during the creation phase
//     return x + y;  // This statement is executed during the execution phase
//   }
  
//   let result = myFunction();  // This function call is executed during the execution phase


// Q.2 What are objects in javascript?
// Ans:- In JavaScript, an object is a collection of key-value pairs that represent a single entity. An object can contain properties (variables) and methods (functions) that describe the object's characteristics and behavior.
// E.g:- 

// let person = {
//   name: "John",  // Property (variable)
//   age: 30,  // Property (variable)
//   sayHello: function() {  // Method (function)
//     return `Hello, my name is ${this.name}`;
//   }
// }

// console.log(person.name);  // Output: "John"
// console.log(person["age"]);  // Output: 30s
// console.log(person.sayHello());  // Output: "Hello, my name is John"

// Q.3 What are function constructors?
// Ans:- function constructor is a function that is used to create objects. A function constructor is called with the "new" keyword and can be used to create multiple objects with the same properties and methods.

// Ans:- function Person(name, age) {
//   this.name = name;  // Property (variable)
//   this.age = age;  // Property (variable)
//   this.sayHello = function() {  // Method (function)
//     return `Hello, my name is ${this.name} and I am ${this.age} years old`;
//   }
// }

// let john = new Person("John", 30);  // Create a new object using the "Person" function constructor
// console.log(john.sayHello());  // Output: "Hello, my name is John and I am 30 years old"

// let jane = new Person("Jane", 25);  // Create a new object using the "Person" function constructor
// console.log(jane.sayHello());  // Output: "Hello, my name is Jane and I am 25 years old"

// Q.4 What are callbacks?
// Ans:- a callback is a function that is passed as an argument to another function and is executed after the outer function has finished executing. Callbacks are commonly used to perform asynchronous tasks, such as making network requests or reading from a file.
// E.g:- function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();  // Call the callback function
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("John", sayGoodbye);  // Output: "Hello, John!", "Goodbye!"



// Q.5 Explain prototypes?
// Ans:-  a prototype is an object that is used as a template for creating new objects. Every object in JavaScript has a prototype, and the prototype can have its own properties and methods. When an object is created, it inherits the properties and methods of its prototype.

// function Person(name, age) {
//     this.name = name;  // Property (variable)
//     this.age = age;  // Property (variable)
//   }
  
//   Person.prototype.sayHello = function() {  // Method (function) added to the prototype
//     return `Hello, my name is ${this.name} and I am ${this.age} years old`;
//   }
  
//   let john = new Person("John", 30);  // Create a new object using the "Person" function
//   console.log(john.sayHello());  // Output: "Hello, my name is John and I am 30 years old"




//Q.7 Give an example of inheritance using function constructor?
// Ans:- 
// function Person(name, age) {
//     this.name = name;  // Property (variable)
//     this.age = age;  // Property (variable)
//   }
  
//   Person.prototype.sayHello = function() {  // Method (function) added to the prototype
//     return `Hello, my name is ${this.name} and I am ${this.age} years old`;
//   }
  
//   function Student(name, age, school) {
//     Person.call(this, name, age);  // Call the parent constructor to set the "name" and "age" properties
//     this.school = school;  // Property (variable)
//   }
  
//   Student.prototype = Object.create(Person.prototype);  // Set the prototype of the "Student" function to the "Person" prototype
//   Student.prototype.constructor = Student;  // Reset the constructor of the "Student" prototype to the "Student" function
  
//   let john = new Student("John", 30, "MIT");  // Create a new object using the "Student" function
//   console.log(john.sayHello());  // Output: "Hello, my name is John and I am 30 years old"
  
  



  

  