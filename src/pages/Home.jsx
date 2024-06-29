import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import { ArrowRightIcon } from '@chakra-ui/icons';

// Import your images
import Image1 from "../../public/Image1.jpeg";
import Image2 from "../../public/Image2.webp";
import Image3 from "../../public/Image3.jpeg";
import Image4 from "../../public/Image4.jpeg";
import Image5 from "../../public/Image5.webp";
import Image6 from "../../public/Image6.jpeg";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Rain or shine, what’s the forecast divine?",
      "Clouds or haze got you in a daze?",
      "Don’t sweat it!",
      "Hit the button below",
      "Get the scoop on your city's weather shenanigans!"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 30,
  });

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [bgImage, setBgImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    
    const nextIndex = (currentIndex + 1) % images.length;
    const preloadImage = new Image();
    preloadImage.src = images[nextIndex];
    preloadImage.onload = () => {
      setBgImage(images[currentIndex]);
    };
  }, [currentIndex, images]);

  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgImage={`url(${bgImage})`}
      bgSize={'cover'}
      bgPosition={'center'}
      height={'100vh'}
      transition={'background-image 0.5s ease'} 
    >
      <Text textAlign={'center'} fontSize={'50px'} color={'white'} fontWeight={'bolder'}>
        {typeEffect}
      </Text>
      <Link
        to="/weather"
        style={{
          textAlign: 'center',
          marginTop: '25px',
          fontSize: '20px',
          color: 'white',
          textDecoration: 'underline',
        }}
      >
        Click Here <ArrowRightIcon />
      </Link>
    </Box>
  );
};

export default Home;
