import React from 'react';

const API_KEY = "3a31101dca352816b30953ff5aca9308";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {currentCity: "Please wait while I find your location...", currentWeather: "", currentCondition: ""};
  }
  
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.requestWeather(position.coords.latitude, position.coords.longitude);
    });
  }
  
  requestWeather(lat, long) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let city = JSON.parse(xhr.responseText).name;
          let weather = JSON.parse(xhr.responseText).main.temp + '°';
          let condition = "It looks like " + JSON.parse(xhr.responseText).weather[0].description + " in";
          this.setState({currentCity: city, currentWeather: weather, currentCondition: condition});
        } else {
          this.setState({currentCity: "Unable to determine your location."});
        }
      }
    };
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${API_KEY}`);
    xhr.send();
  }

  render() {
    return (
    <div className="weather-container">
      <h1 className="weather-condition">{this.state.currentCondition}</h1>
      <h1 className="weather-city">{this.state.currentCity}</h1>
      <h1 className="weather-temp">{this.state.currentWeather}</h1>
    </div>
    );
  }
}

export default Weather;