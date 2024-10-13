import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  WeatherData: any;

  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main: {},
      isDay : true
    };
    this.getWeatherdata();
  }

  getWeatherdata() {
    let web_service_by_country_or_city = 'api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}' 
    let web_service_by_longitude_lattitude = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Saint Augustin&appid=092e1a196c6318d475f960866f891036')
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=-23.5499978&lon=43.7666636&appid=092e1a196c6318d475f960866f891036')
 
    .then(response => response.json())
    .then(data=>{this.setWeatherdata(data);})
    // let data = JSON.parse('{"coord": {"lon": -122.08,"lat": 37.9},"weather": [{"id": 800,"main": "Clear","description": "clear sky","icon": "01d"}],"base": "stations","main": {"temp": 282.55,"feels_like": 281.86,"temp_min": 280.37,"temp_max": 284.26,"pressure": 1023,"humidity": 100},"visibility": 16093,"wind": {"speed": 1.5,"deg": 350},"clouds": {"all": 1},"dt": 1560350645,"sys": {"type": 1,"id": 5122,"message": 0.0139,"country": "US","sunrise": 1560343627,"sunset": 1560396563},"timezone": -25200,"id": 420006353,"name": "Mountain View","cod": 200}')
  }

  setWeatherdata(data) {
  //  console.log(data);
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
   
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    console.log(currentDate.getTime());
    console.log(sunsetTime);
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

  }

}
