//! ---------------------------Day 39----------------------------------
//! 1. Write a function `sayHello()` that prints `"Hello
//! JavaScript"`.✔️
//! 2. Create a function `add(a, b)` that returns their sum
//! and log the result.✔️
//! 3. Write a function with a default parameter `name =
//! "Guest"` that prints `"Hi <name>"`.✔️
//! 4. Use rest parameters to make a function that adds
//! unlimited numbers.✔️
//! 5. Create an IIFE that prints `"I run instantly!"`.
//! 6. Make a nested function where the inner one prints a
//! variable from the outer one.✔️
//! 7. Create an array of 5 fruits. Add one at the end and
//! remove one from the beginning.✔️
//! 8. Use a `for` loop to print all elements of an array.✔️
//! 9. Create an object `person` with keys `name`, `age`,
//! and `city`, and print each key’s value.✔️
//! 10. Use `setTimeout()` to log `"Time’s up!"` after 2
//! seconds.✔️

console.log("Connected");

// function sayHello(){
//     console.log("Hello ")
// }
// sayHello();

//? function add(a,b){
//?     return a+b;
//? }
//? console.log(add(3,2));

//* function greet(name ="Falana"){
//*     console.log(`Hello ${name}`);
//* }
//* greet();
//* greet("dhimkana");

//? function addNumbers(...numbers){
//?     let sum=0;
//?     for(let num of numbers){
//?         sum+=num;
//?     }
//?     return sum;
//? }
//? console.log(addNumbers(12,2));
//? console.log(addNumbers(12,2,3));
//? console.log(addNumbers(12,2,3,98));

// (function(){
//     console.log("I run Instantly");
// })();

//?  arr =['Apple',"guava","mango","Grapes","Lichi"];
//?  arr.push("Banana");
//?  arr.shift();
//?   console.log(arr);
//? arr.forEach(element => {
//?     console.log(element);
//? });
//? for(i=0;i<arr.length;++i){
//?     console.log(arr[i]);
//? }

//* let person={
//*     name:'xyz',
//*     age: 12,
//*     city:'abc'
//* };
//* console.log(person.name);
//* console.log(person.age);
//* console.log(person.city);

setTimeout(() => {
    console.log("hello Time UP!");
    
}, 2000);


