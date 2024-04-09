import React from "react"
import "./SearchBar.css"

import search_icon from "../assets/search.png"

export default function SearchBar({ onSearch }) {
  return (
    <div className="top-bar">
      <input type="text" className="cityInput" placeholder="Search" />
      <div className="search-icon" onClick={onSearch}>
        <img src={search_icon} alt="search" />
      </div>
    </div>
  )
}
