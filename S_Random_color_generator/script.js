
let color_value="";
var color = document.querySelector('.color');
var p = document.querySelector('.text');
var button = document.querySelector('#change');
const value = document.querySelector('.value');
const copyBtn = document.querySelector('#copy');

copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(color_value).then(() => {
        alert("Color Copied: " + color_value);
    })
        .catch(err => {
            console.error("Failed to Copy", err);
        });
});

button.addEventListener('click', function () {
    let r = Math.trunc((Math.random() * 256)); 
    let g = Math.trunc((Math.random() * 256));
    let b = Math.trunc((Math.random() * 256));

    color_value = `rgb(${r},${g},${b})`;
    color.style.backgroundColor = color_value;

    value.innerHTML = color_value
    console.log(color_value);

    p.style.display = "none"
})


