import React from "react"
import "./WindSpeed.css"

import wind_icon from "../assets/wind.png"

export default function WindSpeed(props) {
  const { icon = wind_icon } = props
  return (
    <div className="element">
      <img src={icon} alt="" className="icon" />
      <div className="data">
        <div className="wind-speed">18 km/h</div>
        <div className="text">Wind Speed</div>
      </div>
    </div>
  )
}
