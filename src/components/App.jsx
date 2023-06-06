import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length ? (
        <div>
          <h2> Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <h2>No any contacts</h2>
      )}
    </div>
  );
};
