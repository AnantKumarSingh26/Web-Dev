let inp= document.querySelector(".edit");

inp.addEventListener("input",output);
inp.addEventListener("focus",clk)
inp.addEventListener("blur",unclk)

function output(details){
    if(details.data!== null){
        console.log(details.data);
    }
}
function clk (details){
    let target=details.target
    target.placeholder ="Now Type Some amazing stuff!!";
    target.style.width ="300px";
    
}

function unclk(details){
    // details.target.placeholder="Enter Something";
    // details.target.style.width ="100px";
    details.target.addEventListener
}
console.log("Hello From JS");