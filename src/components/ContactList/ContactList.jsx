import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); 
   };

   if (!filteredContacts?.length) {
    return <div className={css.text}>No contacts found.</div>;
  }


  return (
    <div className={css.wraperContactList}>
      <ul className={css.conactList}>
        {contacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};

