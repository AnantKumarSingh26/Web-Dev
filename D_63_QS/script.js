const api='972a85b4bd15444a85198d3edd701599'
const url = `https://api.rawg.io/api/platforms?key=${api}`;



async function gameData(){
    let raw = await fetch(url);
    let realData = await raw.json();
    console.log(realData);
    console.log('hi');
    
}
gameData();