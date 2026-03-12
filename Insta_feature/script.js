var main = document.querySelector(".main");
var love = document.querySelector("i");

main.addEventListener("dblclick", function () {
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.color = "#f9c3b3"
    love.style.opacity="0.9"
    setTimeout(function () {
        love.style.opacity="0";
    }, 500)
    setTimeout(function () {
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1000)
})