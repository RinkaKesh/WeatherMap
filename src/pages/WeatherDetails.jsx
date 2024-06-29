import React from 'react'
import SearchInput from '../components/SearchInput'
import FetchWeather from '../FetchWeather'
import WeatherCard from '../components/WeatherCard'
import { Box } from '@chakra-ui/react'

const WeatherDetails = () => {
  return (
    <Box>
      <SearchInput/>
      <FetchWeather/>
      <WeatherCard/>
    </Box>
  )
}

export default WeatherDetails
