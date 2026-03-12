let r = Math.trunc((Math.random() * 255));
let g = Math.trunc((Math.random() * 255));
let b = Math.trunc((Math.random() * 255));

var color = document.querySelector('.color');
var p = document.querySelector('p');
var button = document.querySelector('button');

button.addEventListener('click', function () {
    let r = Math.trunc((Math.random() * 255));
    let g = Math.trunc((Math.random() * 255));
    let b = Math.trunc((Math.random() * 255));
    color.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(`rgb(${r},${g},${b})`);
    p.style.display="none"
})


