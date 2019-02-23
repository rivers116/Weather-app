//Initit Localstorage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Initit Weather Object
const weather = new Weather(weatherLocation.city);

//Initit UI
const ui = new UI();

//Get weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
   
    //Change Location
    weather.changeLocation(city);

    //set location in localstorage
    storage.setLocationData(city);

    //Get and display weather
    getWeather();

    //Close Model
    $('#locModal').modal('hide');

});

function getWeather(){
weather.getWeather()
.then(results => {
    ui.paint(results);
})
.catch(err => console.log(err));
}