const submitButton = document.querySelector(".btn");
const mainButton = document.querySelector("#mainButton");
// const card = document.querySelector(".main");
let inputs =document.querySelectorAll("input");

// console.dir(inputs);
const form = document.querySelector(".form");

submitButton.addEventListener('click', (data) => {
    // mainButton.click();4
    data.preventDefault();
    if (performance.navigation.type === 1) {
        console.log("Page was reloaded.");
    }
    // card.removeAttribute("hidden");
    // form.setAttribute("hidden", true);

    //?Creating elements /Defining

    let card = document.createElement("div");   
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);
    

    let name = document.createElement("h3");
    name.textContent =inputs[1].value;

    let number = document.createElement("h5");
    number.textContent= inputs[2].value;

    let email =document.createElement("h6");
    email.textContent= inputs[3].value;

    let about = document.createElement("p");
    about.textContent= document.querySelector("textarea").value;
// console.dir(document.querySelector("textarea").value    );

    //adding card for rendering

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(name);
    card.appendChild(number);
    card.appendChild(email);
    card.appendChild(about);

    form.appendChild(card);


    inputs.forEach(function (input){
        if(input.type!=="submit"){
            input.value="";
        }
    })
})
