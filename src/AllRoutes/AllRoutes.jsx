import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import WeatherDetails from '../pages/WeatherDetails'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/weather' element={<WeatherDetails/>}/>     
    </Routes>
  )
}

export default AllRoutes
