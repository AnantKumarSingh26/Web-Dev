// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100);
//     };
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);

// console.log(ten(1000));
// console.log(twenty(1000));


// Select the heading of a page and change its content

// let heading =document.querySelector("#head");
// console.dir(heading);
// heading.innerHTML='Welcome to my world';




// let lis=document.querySelectorAll("li");
// lis.forEach(
//     function(VAL){
//         console.log(VAL.textContent);
//     }
// );

// let p =document.querySelector("p");
// p.innerHTML = '<i><b>Udated at </b>'

let imgSelector = document.querySelector("img");
// console.log(imgSelector.src);
console.log(imgSelector.getAttribute("src"));
imgSelector.setAttribute("src" ,"https://images.unsplash.com/photo-1759327939880-d28ee3653331?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600");