//! ---------------------------Day 39----------------------------------
//! 1. Write a function `sayHello()` that prints `"Hello
//! JavaScript"`.✔️

// function sayHello(){
//     console.log("Hello ")
// }
// sayHello();

//! 2. Create a function `add(a, b)` that returns their sum
//! and log the result.✔️

//? function add(a,b){
//?     return a+b;
//? }
//? console.log(add(3,2));

//! 3. Write a function with a default parameter `name =
//! "Guest"` that prints `"Hi <name>"`.✔️

//* function greet(name ="Falana"){
//*     console.log(`Hello ${name}`);
//* }
//* greet();
//* greet("dhimkana");


//! 4. Use rest parameters to make a function that adds
//! unlimited numbers.✔️

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

//! 5. Create an IIFE that prints `"I run instantly!"`.✔️


// (function(){
//     console.log("I run Instantly");
// })();

//! 6. Make a nested function where the inner one prints a
//! variable from the outer one.✔️



//! 7. Create an array of 5 fruits. Add one at the end and
//! remove one from the beginning.✔️

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


//! 8. Use a `for` loop to print all elements of an array.✔️



//! 9. Create an object `person` with keys `name`, `age`,
//! and `city`, and print each key’s value.✔️

//* let person={
//*     name:'xyz',
//*     age: 12,
//*     city:'abc'
//* };
//* console.log(person.name);
//* console.log(person.age);
//* console.log(person.city);

//! 10. Use `setTimeout()` to log `"Time’s up!"` after 2
//! seconds.✔️
//? setTimeout(() => {
//?     console.log("hello Time UP!");
//? }, 2000);


console.log("Connected");













//!  -------------------------------Day39-----------------------------------
//! 1. Write a higher-order function `runTwice(fn)` that
//! takes another function and executes it two times.✔️
//  function runTwice(fn){
//     fn();
//     fn()
// }
// function javascript(){
//     console.log("Hello HTML CSs Js");   
// }

// runTwice(javascript)

//! 2. Create one pure function that always returns the
//! same output for a given input, and one impure
//! function using a global variable.✔️


//? let add = function sum(a,b){
//?  return a+b;
//? }
//? console.log(add(3,2));
//? let a=0;
//? function increment(){
//?  return ++a;
//? }
//? console.log(increment());
//? console.log(increment());

//! 3. Write a function that uses object destructuring
//! inside parameters to extract and print `name` and
//! `age`.

//* function abcd(nam,age){
//*  console.log(nam,age);
//* }
//* abcd({nam:'Arsh',age: 24})

//! 4. Demonstrate the difference between normal
//! function and arrow function when used as object
//! methods (the `this` issue).
 
//? let obj = {
//?     nam:'ABC',
//?     fnc: function () {
//?         console.log(this);
//?     },
//?     fnc2: () => console.log(this),
//? }
//? obj.fnc();
//? obj.fnc2();


//! 5. Given an array of numbers, use `map()` to create a
//! new array where each number is squared.

//* let arr=[1,32,53,12,324];
//* let newarr = arr.map(function(val){
//*     console.log(`insidie: ${val}`);    
//*     return val*val;
//* });
//* console.log(newarr);


//! 6. Use `filter()` to get only even numbers from an
//! array.

//? let arr = [13,3,34,34,1,6,7,8,2,8,3];
//? arr.filter(function(val){
//?     if(val%2==0)
//?     {
//?         console.log(val);
//?     }
//? })

//! 7. Use `reduce()` to find the total salary from an array
//! of numbers `[1000, 2000, 3000]`.

//* function addUnlimited(...nums){
//*     let ans = nums.reduce(function(acc,value){
//*         return acc+value
//*     },0);
//*     console.log(ans);
//* }
//* addUnlimited(1,2,3,5,6);

//! 8. Create an array of names and use `some()` and
//! `every()` to test a condition (e.g., all names longer than
//! 3 chars).

//? const names = ["Alice", "Bob", "Charlie","Avi","Rx","DrX","Dm","Daroga"]
//? let ans= names.some(function(val){
//?     return val.length>3;
//? })
//? let ans2= names.every(function(val){
//?     return val.length>3;
//? })

//! 9. Create an object `user` and test the behavior of
//! `Object.freeze()` and `Object.seal()` by
//! adding/changing keys.

//* let user= {
//*     nam:"Falana",
//*     age:27,
//*     emaila:"h@h.h"
//* }

//* Object.seal(user);
//* user.nam="Dhimkana"
//* console.log(user.nam);
//* Object.freeze(user);
//* user.nam="Falana Bo"
//* console.log(user);


//! 10. Create a nested object (`user → address → city`) and
//! access the city name inside it.

//? let obj={
//?     nam:"Falana",
//?     address:{
//?         city:"Murtabik"
//?     }
//? }
//? let {city}= obj.address
//? console.log(city); or console.log(obj.address.city);


// ! -------------------------------------Day-41----------------------------------------