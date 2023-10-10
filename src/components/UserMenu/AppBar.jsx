import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      mb="20px"
      p="8px"
      borderBottomWidth="4px"
      borderBottomColor="gray.400"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
