let text =document.querySelector("h1");
console.dir(text);
// console.dir(document.addEventListener("keydown"),(data)=>{
// });
document.addEventListener("keydown",(data)=>{
    // text.innerText= data.key;
    if(data.key===" "){
        text.innerText = "SPC"
    }
    else{
        text.innerText= data.key;
    }
})