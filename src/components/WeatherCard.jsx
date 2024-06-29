import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
} from '@chakra-ui/react';
import { WeatherContext } from '../context/WeatherProvider';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  const renderWeatherIcon = () => {
    if (!weatherData) return null;

    const weatherMain = weatherData.weather[0].main.toLowerCase();
    let iconUrl = '';

    switch (weatherMain) {
      case 'haze':
        iconUrl = 'https://www.nicepng.com/png/full/123-1236627_haze-icon-png-haze-weather-icon.png';
        break;
      case 'clear':
        iconUrl = 'https://www.nicepng.com/png/detail/73-738655_pastel-colored-symbol-for-partly-cloudy-sky-vector.png';
        break;
      case 'mist':
        iconUrl = 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png';
        break;
      case 'clouds':
        iconUrl = 'https://www.nicepng.com/png/detail/84-849048_cartoon-cloud-png-clouds-clip-art.png';
        break;
      case 'thunderstorm':
        iconUrl = 'https://www.nicepng.com/png/detail/158-1586210_thunderstorm-png-file-weather-symbols-for-thunderstorms.png';
        break;
      case 'rain':
        iconUrl = 'https://www.nicepng.com/png/detail/797-7978007_rain-icon-image-rain-icon-small.png';
        break;
      case 'snow':
        iconUrl = 'https://www.nicepng.com/png/detail/15-151216_snow-icon-png.png';
        break;
      case 'drizzle':
        iconUrl = 'https://simg.nicepng.com/png/small/1-16710_cloud-clouds-rain-drops-drizzle-rainfall-comments-cute.png';
        break;
      default:
        iconUrl = 'https://www.flaticon.com/free-icon/dust_10818244?term=dust+smog&page=1&position=2&origin=search&related_id=10818244';
        break;
    }

    return <Image src={iconUrl} alt="Weather Icon" boxSize={{ base: "100%", sm: "150px" }} />;
  };

  if (!weatherData) return null;

  const { main, weather, sys, wind, name } = weatherData;

  return (
    <Box
      margin={"100px auto"}
      maxW="400px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      bgGradient="linear(to-r, #fc466b, #3f5efb)"
      color="white"
      boxShadow="xl"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Text fontSize="2xl" fontWeight="bold">{name}</Text>
      <Flex
        justify="space-between"
        align="center"
        mt="4"
        direction={{ base: "column", sm: "row" }}
      >
        <Box>{renderWeatherIcon()}</Box>
        <Box textAlign={{ base: "center", sm: "right" }} mt={{ base: "2", sm: "0" }}>
          <Text fontSize="4xl">{main.temp}°C</Text>
          <Text>{weather[0].main.toUpperCase()}</Text>
        </Box>
      </Flex>

      <Stack spacing="2" mt="4">
        <Stat>
          <StatLabel>Humidity</StatLabel>
          <StatNumber>{main.humidity}%</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Wind Speed</StatLabel>
          <StatNumber>{wind.speed} m/s</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Sunrise</StatLabel>
          <StatNumber>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Sunset</StatLabel>
          <StatNumber>{new Date(sys.sunset * 1000).toLocaleTimeString()}</StatNumber>
        </Stat>
      </Stack>
    </Box>
  );
};

export default WeatherCard;
