import React from "react"
import "./Humidity.css"

import humidity_icon from "../assets/humidity.png"

export default function Humidity(props) {
  const { icon = humidity_icon } = props

  return (
    <div className="element">
      <img src={icon} alt="" className="icon" />
      <div className="data">
        <div className="humidity-percent">64%</div>
        <div className="text">Humidty</div>
      </div>
    </div>
  )
}
