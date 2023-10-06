import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://6510093e3ce5d181df5cdbfc.mockapi.io/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      toast.error('Oops! Something went wrong! Try reloading the page!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, newContact);
      return response.data;
    } catch (error) {
      toast.error('Oops! Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error('Oops! Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
