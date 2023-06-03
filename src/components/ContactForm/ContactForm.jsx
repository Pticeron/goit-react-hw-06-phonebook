import propTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const INITIAL_VALUES = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm}) => {
     contactName = values.name.toLowerCase();
     const isSaved = contacts.find(
      contact => contact.name.toLowerCase() === contactName
     );
     if(isSaved) {
      alert(`${values.name} is already in contacts`);
     } else {
      dispatch(addContact({...values, id: nanoid()}));
     }
     resetForm();
    };

    

  return (
      <form className={css.form} 
      onSubmit={handleSubmit}
      initialValues = {{INITIAL_VALUES}}
        >
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={onChangeInput}
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={onChangeInput}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
