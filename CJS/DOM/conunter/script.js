var h1 = document.querySelector('h1')
var incBtn =  document.querySelector('#inc')
var decBtn =  document.querySelector('#dec')

// btn.addEventListener('click',function(){
//     h1.innerHTML = 'Hi Bye Hello'
//     h1.style.color = 'red'
//     h1.style.fontSize =  '60px'
//     btn.innerHTML = "Click Me 😁"
// })
var a=0;
incBtn.addEventListener('click',function(){
    h1.innerHTML=++a;
})
decBtn.addEventListener('click',function(){
    h1.innerHTML=--a;
})