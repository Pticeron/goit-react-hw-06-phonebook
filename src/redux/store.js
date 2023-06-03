import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';
import { contactsReduser } from '/contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistedReducer } from 'redux/persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contacts: persistedReducer(persistConfig, contactsReducer),
    filter: filterReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
