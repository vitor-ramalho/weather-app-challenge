import React from 'react';

import './App.css'

import Form from './components/Form/Form';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
//import CapitalsWeather from './components/CapitalsWeather/CapitalsWeather';

const apiKey = "c2b903cdf326a8c09a4bd6f8b4dd4a8a";

document.body.style = 'background: orange;';
class App extends React.Component {

  state = {
    temperature: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    feels_like: undefined,
    error: undefined,

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
        temperature: data.main.temp - 273.15,
        temp_min: data.main.temp_min - 273.15,
        temp_max: data.main.temp_max - 273.15,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        climate: data.weather[0].main,
        wind: data.wind.speed * 5,
        feels_like: data.main.feels_like - 273.15,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        climate: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        feels_like: undefined,
        error: "Please enter the value",
      })
    }
  }

  render() {
    return (
      <>
      <h1>Weather Finder!</h1>
        <Form getWeather={this.getWeather} />

        <WeatherInfo
          temperature={this.state.temperature}
          city={this.state.city}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          humidity={this.state.humidity}
          wind={this.state.wind}
          feels_like={this.state.feels_like}
          description={this.state.description}
          country={this.state.country}
          climate={this.state.climate}
          error={this.state.error}
        />
      </>
    )
  }
}

export default App;
