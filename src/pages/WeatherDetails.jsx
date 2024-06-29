import React from 'react'
import SearchInput from '../components/SearchInput'
import FetchWeather from '../FetchWeather'
import WeatherCard from '../components/WeatherCard'

const WeatherDetails = () => {
  return (
    <div>
      <SearchInput/>
      <FetchWeather/>
      <WeatherCard/>
    </div>
  )
}

export default WeatherDetails
