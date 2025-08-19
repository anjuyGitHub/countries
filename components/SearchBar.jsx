import React from 'react'

export default function SearchBar({ onChange }) {

  return (
  <div className="search-container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input onInput={onChange} type="text" placeholder='Search for a country...'/>
  </div>
  )
}
