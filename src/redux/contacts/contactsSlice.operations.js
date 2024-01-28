import {createAsyncThunk} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://65b649dfda3a3c16ab007efa.mockapi.io',
  });
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const { data } = await instance.get('/contacts');
      toast.success('Contacts loaded');
      return data;
    }catch (error) {
      toast.error('Contacts loading error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
        const { data } = await instance.post('/contacts', contact);
      toast.success('Contact added');
      return data;
    } catch (error) {
      toast.error('Contact adding error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
        const { data } = await instance.delete(`/contacts/${id}`);
      toast.success('Contact deleted');
      return data;
    } catch (error) {
      toast.error('Contact deleting error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);