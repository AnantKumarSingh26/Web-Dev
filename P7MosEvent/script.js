let color = document.querySelector(".color");

color.addEventListener("mouseover", function(){
    color.style.backgroundColor = "#fff"
})
color.addEventListener("mouseout", function(){
    color.style.backgroundColor = "#000"
})

window.addEventListener("mousemove", function(deta){
    color.style.top= deta.clientY + "px"
    color.style.left= deta.clientX + "px"
    // color.style.position = "absolute"
})