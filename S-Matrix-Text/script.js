const p = document.querySelector('p');
const text =p.innerText;

let iteration =0;


const str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function randomText(){
    const chara = text.split("").map((chara,index)=>{
        if(index<iteration){
            return chara;
        }
        return str.split("")[Math.floor(Math.random()*52)]
    }).join("");
    p.innerText = chara;
    iteration+=0.2;
}

 setInterval(randomText,20)