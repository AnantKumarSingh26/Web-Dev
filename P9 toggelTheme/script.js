// console.log(window.matchMedia('(prefers-color-scheme: light)'));
function toggleTheme(){
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
}
const body = document.querySelector('body');
const toggleButton =document.querySelector('button');
const para =document.querySelector('p');
// console.dir(para);

toggleButton.addEventListener('click',toggleTheme);

const lightModeQuery = window.matchMedia('(prefers-color-scheme: light)');

// Add a listener function
lightModeQuery.addEventListener('change', (event) => {
    if (event.matches) {
        console.log("The user switched to LIGHT Mode! ☀️");
        para.textContent ="Light Mode"
        // Logic to apply your light theme styles
    } else {
        console.log("The user switched to DARK Mode! 🌙");
        // Logic to apply your dark theme styles
        para.textContent = "Dark Mode"
    }
});