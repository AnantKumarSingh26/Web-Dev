let box = document.querySelector('.center');
box.addEventListener("mousemove", (details) => {
    console.log(box.getBoundingClientRect());
});
console.log("hey");

