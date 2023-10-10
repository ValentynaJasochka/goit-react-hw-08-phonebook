import { Flex } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

const PhoneBook = () => {
  return (
    <Flex justify="center" direction="column" gap="40px">
      <ContactForm />
      <Contacts>
        <Filter />
      </Contacts>
    </Flex>
  );
};

export default PhoneBook;
