const button =document.querySelector('button');
const form = document.querySelector('#form');
button.addEventListener('click',()=>{
    event.preventDefault();
    form.style.display='none'
    window.open('certificate.html','_blank');
})