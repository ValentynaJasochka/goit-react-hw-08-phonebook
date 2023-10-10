import { Link } from './UserMenu.styled';
import { Box, Text } from '@chakra-ui/react';
export const Navigation = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      gap="30px"
    >
      <Link to="/">
        <Text
          fontSize={15}
          color={'navy'}
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          Phone Book
        </Text>
      </Link>
      <Link to="/contacts">Contacts</Link>
    </Box>
  );
};
