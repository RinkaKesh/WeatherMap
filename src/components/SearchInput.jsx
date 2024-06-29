import React, { useContext, useState } from 'react';
import {
  InputGroup,
  Input,
  InputRightAddon,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { CityContext } from '../context/CityProvider';

const SearchInput = () => {
  const { setCity } = useContext(CityContext);
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      padding="1rem"
      bg="gray.800"
      color="white"
      direction={{ base: 'column', md: 'row' }}
    >
      {/* Left side: Logo */}
      <Flex align="center" mb={{ base: '1rem', md: 0 }}>
        <Heading as="h1" size="lg">
          WeatherMap
        </Heading>
      </Flex>

      {/* input sec  */}
      <Flex align="center">
        <InputGroup size="lg" maxW="md" width={{ base: '100%', md: 'auto' }}>
          <Input
            placeholder="Search City Here"
            name="city"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputRightAddon onClick={handleSearch} cursor="pointer" bg={"gold"}>
            <SearchIcon color={"black"} />
          </InputRightAddon>
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default SearchInput;
