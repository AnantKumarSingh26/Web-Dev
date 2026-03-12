var main = document.querySelector(".main");
var love = document.querySelector("i");

//desktop mode behavior
main.addEventListener("dblclick", showLove);

function showLove() {
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.color = "#f9c3b3"
    love.style.opacity = "0.9"
    setTimeout(function () {
        love.style.opacity = "0";
    }, 500)
    setTimeout(function () {
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1000)
}

// mobile mode behavior

let lastTap = 0;
main.addEventListener("touchend", function (e) {
    let currentTime = new Date().getTime();
    let tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
        showLove();
        e.preventDefault();
    }
    lastTap = currentTime;
});