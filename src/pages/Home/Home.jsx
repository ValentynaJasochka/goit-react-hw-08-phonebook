import { Box, Text } from '@chakra-ui/react';
const Home = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="800px"
      bgGradient="radial(gray.300, blue.100, pink.200)"
    >
      <Text
        fontSize={30}
        color={'navy'}
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Phone Book
      </Text>
    </Box>
  );
};

export default Home;
