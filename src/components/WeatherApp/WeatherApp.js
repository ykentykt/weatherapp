import React, { useState } from "react"
import Humidity from "../Humidity/Humidity"
import WindSpeed from "../WindSpeed/WindSpeed"
import SearchBar from "../SearchBar/SearchBar"
import "./WeatherApp.css"

import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"

const WeatherApp = () => {
  let api_key = "4bbf85d2ad1ca94d0dc20ea31f8ccb4d"

  const [weatherIcon, setWeatherIcon] = useState(cloud_icon)

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value === "") {
      return 0
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

    let response = await fetch(url)
    let data = await response.json()
    console.log("test")
    console.log(data)
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-speed")
    const temp = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity + "%"
    wind[0].innerHTML = data.wind.speed + " km/h"
    temp[0].innerHTML = Math.floor(data.main.temp) + "°C"
    location[0].innerHTML = data.name

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clear_icon)
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloud_icon)
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(cloud_icon)
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(cloud_icon)
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(drizzle_icon)
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rain_icon)
    } else if (
      data.weather[0].icon === "11d" ||
      data.weather[0].icon === "11n"
    ) {
      setWeatherIcon(rain_icon)
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snow_icon)
    } else {
      setWeatherIcon(clear_icon)
    }
  }

  return (
    <div className="container">
      <SearchBar onSearch={search} />
      <div className="weather-img">
        <img src={weatherIcon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <Humidity icon={humidity_icon} />
        <WindSpeed icon={wind_icon} />
      </div>
    </div>
  )
}

export default WeatherApp
