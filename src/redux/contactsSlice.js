import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => [...state, action.payload],
      prepare: text => ({
        payload: {
          ...text,
          id: nanoid(),
        },
      }),
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
