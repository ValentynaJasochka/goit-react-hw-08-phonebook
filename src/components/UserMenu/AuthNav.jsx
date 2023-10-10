import { Link } from './UserMenu.styled';
import { Box } from '@chakra-ui/react';
export const AuthNav = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      gap="30px"
    >
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </Box>
  );
};
