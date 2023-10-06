import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { getContactsThunk } from 'redux/ContactsThunk';
import { ContactItem } from '../ContactItem/ContactItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Heder } from './Contacts.styled';

export const Contacts = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('HOHOHO');
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filterValue = useSelector(getFilter);
  // console.log(filterValue);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      <Heder>Contacts</Heder>
      {children}
      <ToastContainer autoClose={2000} position="top-center" />
      <ul>
        {visibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.phone}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
