import propTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { ValidationSchema } from '/ValidationSchema';

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

  const handleSubmit = (values, { resetForm }) => {
    contactName = values.name.toLowerCase();
    const isSaved = contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact({ ...values, id: nanoid() }));
    }
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
      initialValues={{ ...INITIAL_VALUES }}
    >
      <form className={css.form}>
        <label className={css.formLabel}>
          Please write the name
          <input className={css.formName} type="text" name="name" />
          <ErrorMessage name="name"></ErrorMessage>
        </label>
        <label className={css.formLabel}>
          Please write the phone number
          <input className={css.formNumber} type="tel" name="number" />
          <ErrorMessage name="number"></ErrorMessage>
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
