const phoneLabel = document.getElementById("pLabel");
const phoneSelect = document.getElementById("phone");

phone.addEventListener('change',()=>{
    phoneLabel.textContent=`${phoneSelect.value} is selected. Any Change!!`;
    console.log(phoneSelect.value);
})