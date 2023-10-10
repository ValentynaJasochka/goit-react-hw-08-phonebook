import { deleteContactsThunk } from 'redux/contacts/ContactsThunk';
import { useDispatch } from 'react-redux';

import { Text, Box, Button } from '@chakra-ui/react';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg="white"
    >
      <Box display="flex" alignItems="baseline" gap="40px">
        <Text
          fontSize={20}
          color={'navy'}
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          {name}
        </Text>
        <Text
          fontSize={15}
          color={'blue'}
          fontWeight="extrabold"
          textTransform="uppercase"
        >
          {number}
        </Text>
      </Box>

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
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </Box>
  );
};
