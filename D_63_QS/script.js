const api='1616f68b69c9fa4dad2db19cb5ea3e5f1616f68b69c9fa4dad2db19cb5ea3e5f'
const url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${api}`;

async function  getWeather(city = 'London') {
    let raw = await fetch(url);
    console.log(raw);
    
    let realData = await raw.json();
    console.log(realData);
}
try{
    getWeather();

}catch(err){
    console.log('We are having error');
    
}