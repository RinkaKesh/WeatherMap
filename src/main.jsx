import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {CityProvider} from './context/CityProvider.jsx'
import {WeatherProvider} from './context/WeatherProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
    <CityProvider>
    <WeatherProvider>
    <App />
    </WeatherProvider>
    </CityProvider>
  </ChakraProvider>
  </BrowserRouter>,
)
