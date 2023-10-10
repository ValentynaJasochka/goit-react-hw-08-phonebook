import { useDispatch, useSelector } from 'react-redux';
import { selectAuthName } from 'redux/auth/selectors';
import { Box, Button, Text } from '@chakra-ui/react';
import { logOut } from 'redux/auth/AuthThunk';

export const UserMenu = () => {
  const userName = useSelector(selectAuthName);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      width="450px"
    >
      <Text
        fontSize={15}
        color={'navy'}
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Welcome {userName}
      </Text>
      <Button
        colorScheme="blue"
        width="200px"
        variant="solid"
        _hover={{ bg: '#105413' }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        type="button"
        onClick={handleClick}
      >
        Logout
      </Button>
    </Box>
  );
};
