let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack= document.querySelector(".stack");
const upBtn= document.querySelector("#upBtn");
const downBtn= document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector("input[placeholder='https://imge/pic.jpg']");

const fullNameInput = form.querySelector("input[placeholder='Enter Full Name']"); // removed space

const homeTownInput = form.querySelector("input[placeholder='Enter Home Town']");

const purporseInput = form.querySelector("input[placeholder='e.g. , Quick appointment']"); // fixed placeholder

const categoryRadios= form.querySelectorAll("input[name ='Category']");

const submitButton= form.querySelector(".submit-btn");

//code part start here

function saveToLocalStorage(obj){
    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    } else {
        let oldTasks = localStorage.getItem("tasks"); // fixed variable name
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}

addNote.addEventListener("click", function(){
    formContainer.style.display="initial";
});

closeForm.addEventListener("click", function(){
    formContainer.style.display="none";
});
form.addEventListener("submit",function(evt){
    evt.preventDefault();
    // variables-> form

    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim(); // fixed to use fullNameInput
    const homeTown = homeTownInput.value.trim();
    const purpose = purporseInput.value.trim();

    let selected = false;

    categoryRadios.forEach(function(cat){
        if(cat.checked){
            selected= cat.value;
        }
    });
    if(imageUrl==""){
        alert("Please enter an Image URL");
        return;
    }
    if(fullName==""){
        alert("Please enter your Full Name");
        return;
    }
    if(homeTown==""){
        alert("Please enter your Home Town");
        return;
    }
    if(purpose==""){
        alert("Please enter your Purpose");
        return;
    }
    if(!selected){
        alert("Please select a category");
        return;
    }

    saveToLocalStorage({
        imageUrl,fullName,purpose,homeTown,selected
    });
    form.reset();
    formContainer.style.display="none";
    showCards();
});

function showCards(){
    stack.innerHTML="";

    let allTasks= JSON.parse(localStorage.getItem("tasks")) || [];

    allTasks.forEach(function(task, index){
        const card = document.createElement("div");
        card.classList.add("card");

        // Add priority color based on category
        switch(task.selected) {
            case 'emergency':
                card.style.borderLeft = '4px solid black';
                break;
            case 'important':
                card.style.borderLeft = '4px solid #a855f7';
                break;
            case 'urgent':
                card.style.borderLeft = '4px solid rgb(240, 93, 40)';
                break;
            case 'no-rush':
                card.style.borderLeft = '4px solid teal';
                break;
        }

        const avatar= document.createElement("img");
        avatar.src=task.imageUrl;
        avatar.alt="Porfile";
        avatar.classList.add("avatar");
        card.appendChild(avatar);


        const name = document.createElement("h2");
        name.textContent= task.fullName;
        card.appendChild(name);

        const hometownInfo= document.createElement("div");
        hometownInfo.classList.add("info");

        const hometownLabel = document.createElement("span");
        hometownLabel.textContent="Home Town";

        const hometownValue= document.createElement("span");
        hometownValue.textContent= task.homeTown;

        hometownInfo.appendChild(hometownLabel);
        hometownInfo.appendChild(hometownValue);
        card.appendChild(hometownInfo);


        const bookingsInfo= document.createElement("div");
        bookingsInfo.classList.add("info");

        const bookingsLabel = document.createElement("span");
        bookingsLabel.textContent= "Purpose";

        const bookingValue= document.createElement("span");
        bookingValue.textContent= task.purpose;

        bookingsInfo.appendChild(bookingsLabel);
        bookingsInfo.appendChild(bookingValue); // Remove the 0
        card.appendChild(bookingsInfo);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML ='<i class="ri-phone-line"></i> Call'

        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent="Message";

        // Add delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>';
        deleteBtn.onclick = () => deleteCard(index);

        buttonsDiv.appendChild(callBtn);
        buttonsDiv.appendChild(msgBtn);
        buttonsDiv.appendChild(deleteBtn);

        card.appendChild(buttonsDiv);

        document.querySelector(".stack").appendChild(card);     
    });
    updateStack();
}

// Add delete function
function deleteCard(index) {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    allTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    showCards();
}

function updateStack(){
    const cards = document.querySelectorAll(".stack .card");

    cards.forEach((card,i)=>{
        if(i<3){
            card.style.zIndex=3-i;
            card.style.transform=`translateY(${i*10}px) scale(${1-i*0.02})`;
            card.style.opacity=`${1-i*0.02}`;
            card.style.display='block';
        }
        else{
            card.style.display='none';
        }
    })
}

upBtn.addEventListener("click",function(){
    let lastChild= stack.lastElementChild;

    if(lastChild){
        stack.insertBefore(lastChild,stack.firstElementChild);

        updateStack();
    }
});

downBtn.addEventListener("click",function(){
    const firstChild = stack.firstElementChild;
   if(firstChild){
    stack.appendChild(firstChild);

    updateStack();
   }
});


