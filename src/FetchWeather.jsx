import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CityContext } from './context/CityProvider';
import { WeatherContext } from './context/WeatherProvider';
import { Box, Text } from '@chakra-ui/react';

const FetchWeather = () => {
  const { city } = useContext(CityContext);
  const { setWeatherData } = useContext(WeatherContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f41a246a8f470c1ca2af0b4af29c7cc5`
        );
        setWeatherData(response.data);
        setError(null); // Clear any previous error
      } catch (error) {
        console.error('Error fetching data:', error);
        setWeatherData(null);
        setError(`'${city}' not found. Please try another city.`);
      }
    };

    if (city) {
      fetchWeatherData(city);
    }
  }, [city, setWeatherData]);

  return error ? (
    <Box p="4" bg="red.500" color="white" mt="4" borderRadius="md" textAlign="center" maxW={{ base: "90%", sm: "60%", md: "40%" }} mx="auto">
      <Text>{error}</Text>
    </Box>
  ) : null;
};

export default FetchWeather;
