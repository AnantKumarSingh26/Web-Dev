var h1 = document.querySelector('h1')
var btn =  document.querySelector('button')

btn.addEventListener('click',function(){
    h1.innerHTML = 'Hi Bye Hello'
    h1.style.color = 'red'
    h1.style.fontSize =  '60px'
    btn.innerHTML = "Click Me 😁"
})