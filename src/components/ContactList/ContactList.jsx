import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts  } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter).toLowerCase();
  

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };


  return (
    <div className={css.wraperContactList}>
      <ul className={css.conactList}>
        {getVisibleContacts().map((contact, id) => (
          <li key={id} className={css.contactListItem}>
          {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};





