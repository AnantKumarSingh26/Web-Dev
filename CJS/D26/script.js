// 1
console.log("Conncected");

//* alert("hi");

//? let nam = prompt("Your good Name");
//? console.log(`${nam}, Welcome to cohort`);

//! let city= "Bhopal";
//!  console.log(city)

//* var a = "Harsh";
//* let b = "Sheryians";
//* const c = "“Schoolˮ"
//* a="Harsh Sharma";
//* b= "Harkirat singh"
//* c= "college"
//* {
//*     let num=20;
//* }
//* console.log(num);

//? nam = "xyz";
//? age = 12;
//? city = "abc";
//? console.log(`${nam}: Name \n ${age}:Age \n ${city}:city`);
//? console.info(`${nam}: Name \n ${age}:Age \n ${city}:city`);
//? console.warn(`${nam}: Name \n ${age}:Age \n ${city}:city`);

//! let msg="I love  Development";
//! console.log(msg.slice(2,6)); 
//! console.log(msg.split(" "));
//! console.log(msg.replace("love","❤️") );
//! console.log(msg.includes("love"));

//* console.log("Hey"+"Anant");

//* let age =25 ;
//* let name =" harsh";
//* let isStudent = true;
//* let skills = ["js","HTML"];
//* let user = { city: "Bhopal"};
//* let x =  null;
//* let y;
//* let z =  Symbol("id")
//* console.log(typeof(name));
//* console.log(2+"-Even");
//* console.log(0/0);
//* console.log(1/0);
//* console.log(Number("abc"));
//* console.log(undefined+1);

//? let x =5;
//? let y=x;
//?  y=10;
//? console.log(x,y);

// let obj1= {nam:"Gemini"};
// let obj2= { ...obj1 };
// obj2.nam="Kilo Code"
// console.log(obj1);


//! -------------------------------Day 32 Questions--------------------------------------
// 7. Ask user’s age and check if eligible to vote
// let age = prompt("What is you age?");
// if (age > 18) {
//     console.log('You Can vote');
// }
// else {
//     console.log('You Can not vote');
// }


//* 8. Print multiplication table of 5
//* Use loop to print 5 × 1 to 5 × 10.
//* let num=prompt("Which Table You want to print?");
//* for(i=1;i<=10;++i){
//*     console.log(`${num} * ${i} = ${num*i}`);
//* }

//? 8. Print multiplication table of 5
//? Use loop to print 5 × 1 to 5 × 10.
//? let num=15;
//? let flag =0 ;
//? for(let i=0;i<=15;++i){
//?     if (i>8)flag++;
//? }
//? console.log(flag);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let pass = '';
// let correctPassword = "Eagle";
// for (let i = 3; i >0; --i) {
//     pass=prompt("Enter Password");
//     pass = pass.trim();
//     console.log(typeof(pass));
//     if (pass === correctPassword) {
//         console.log("Correct password");
//     }
//     else {
//         console.log("Try Again!");
//     }
// }


//? 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
//? Loop until "stop" is typed. Count "yes".
//? let flag = 0;
//? while (true) {
//?     let word = prompt("enter the word");
//?     if (word === 'stop') {
//?         break;
//?     }
//?     if (word == 'yes') {
//?         ++flag;
//?     }
//? }
//? console.log("Number of times yes typed- " + flag);


//* 13. Print numbers divisible by 7 from 1 to 50
//* Use modulo % and loop
//* for(let i=1; i<=50;++i)
//* {
//*     if(i%7==0){
//*         console.log(`${i}`);        
//*     }
//* }

//? 18. Ask user 5 numbers. Count how many are positive
//? Use loop + condition + counter.
//? let positiveNum=0;
//? for(let i=0;i<5;++i){
//?     let num=prompt("Enter a number");
//?     if(num>0){++positiveNum}
//? }
//? console.log(positiveNum);

//* 19. ATM Simulator – Allow 3 withdrawals
//* Start with ₹1000 balance. Ask withdrawal amount 3 times.
//* If enough balance → deduct
//* Else → print “Insufficient balance”
//* let balance=1000;
//* for(let i=0;i<3;++i){
//*     if(balance==0){
//*         break;
//*     }
//*     let currentAmount = prompt("Enter Amount to Withdraw");
//*     currentAmount= Number(currentAmount);
//*     if(currentAmount<=balance){
//*         balance-=currentAmount;
//*         console.log(`Amount Deducted from Account ${currentAmount}\n Remaining Balance ${balance}`);        
//*     }
//*     else{
//*         console.log("Insuffiecient Balance");    
//*     }  
//* }