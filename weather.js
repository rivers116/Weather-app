class Weather {
    constructor(city) {
        this.apiKey = '82b3a01083b18da8dad19a9e210d7e9d';
        this.city = city;
    }

    //Fetch weather from API
async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;   
}
//Change weather location
changeLocation(city) {
    this.city = city;    
}
}

