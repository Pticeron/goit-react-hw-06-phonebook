import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsSlice.reduser,
  filter: filtersSlice.reduser,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
