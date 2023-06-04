import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(state => state.filter.filter).toLowerCase();
  

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



ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};

