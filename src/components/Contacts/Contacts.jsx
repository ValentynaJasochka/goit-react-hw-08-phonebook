import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { getContactsThunk } from 'redux/contacts/ContactsThunk';
import { ContactItem } from '../ContactItem/ContactItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text, Box } from '@chakra-ui/react';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Text
        fontSize={30}
        color={'navy'}
        textAlign={['left', 'center']}
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Contacts
      </Text>
      {children}
      <ToastContainer autoClose={2000} position="top-center" />

      <Box
        display="flex"
        flexDirection="column"
        justifyItems="center"
        gap="40px"
      >
        {visibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </Box>
    </>
  );
};
