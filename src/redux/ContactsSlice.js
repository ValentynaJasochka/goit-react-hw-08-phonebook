import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './constants';
import {
  getContactsThunk,
  createContactsThunk,
  deleteContactsThunk,
} from './ContactsThunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};
const handleFulfilledGet = ({ contacts }, { payload }) => {
  contacts.items = payload;
};
const handleFulfilledCreate = ({ contacts }, { payload }) => {
  contacts.items.push(payload);
};
const handleFulfilledDelete = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(contact => contact.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
const arrThunks = [getContactsThunk, createContactsThunk, deleteContactsThunk];
const addThunksStatus = status => arrThunks.map(thunk => thunk[status]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...addThunksStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...addThunksStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...addThunksStatus(REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
