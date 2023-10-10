import { useDispatch, useSelector } from 'react-redux';
import { Form } from './ContactForm.styled';
import {
  Input,
  InputLeftElement,
  InputGroup,
  FormLabel,
  FormControl,
  Button,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createContactsThunk } from 'redux/contacts/ContactsThunk';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onChangeInput = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const contactName = name.value;
    const contactNumber = number.value;
    event.target.reset();
    if (isContactNew(contacts, contactName)) {
      alert(`${contactName} is already in contacts`);
      return;
    }
    dispatch(createContactsThunk({ name: contactName, number: contactNumber }));
  };

  const isContactNew = (contacts, newContact) => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.toLowerCase()
    );
  };

  return (
    <Form onSubmit={onChangeInput}>
      <FormControl>
        <FormLabel fontSize={20} color={'navy'}>
          Name
          <Input
            variant="outline"
            size="md"
            focusBorderColor="pink.400"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={contacts.name}
            required
          />
        </FormLabel>
      </FormControl>

      <FormControl>
        <FormLabel fontSize={20} color={'navy'}>
          Phone number
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              variant="outline"
              size="md"
              focusBorderColor="pink.400"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={contacts.number}
              required
            />
          </InputGroup>
        </FormLabel>
      </FormControl>
      <Button
        colorScheme="blue"
        width="200px"
        variant="solid"
        _hover={{ bg: '#105413' }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        type="submit"
      >
        Add contact
      </Button>
    </Form>
  );
};
