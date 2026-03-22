let overlay =document.querySelector(".overlay")
addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY)
    overlay.style.setProperty("--x", e.clientX + 'px')
    overlay.style.setProperty("--y", e.clientY + "px")
})