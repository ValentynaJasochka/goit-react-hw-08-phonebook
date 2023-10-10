import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/FilterSlice';
import { contactsReducer } from './contacts/ContactsSlice';
import { authReducer } from './auth/AuthSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    // auth: authReducer,
  },
});
export const persistor = persistStore(store);
