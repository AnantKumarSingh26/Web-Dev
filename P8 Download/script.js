
let progress = 0;
const progressBar= document.querySelector(".progress");
const progressElement = document.querySelector("p");
const textContent =document.querySelector("h3");

const inner= document.querySelector(".inner");
 

const interval = setInterval(() => {
  if (progress <= 100) {
    progressBar.style.width =  `${progress}%`;   
    progressElement.textContent = `${progress}%`;
    progress++;
  } else {
    // alert("Hello! This is an alert message.");
    textContent.textContent="Thanks for Downloading..."
    clearInterval(interval);
    setTimeout(()=>{
        inner.style.display="none"
    },2000)

  }
}, 10); // updates every 50ms