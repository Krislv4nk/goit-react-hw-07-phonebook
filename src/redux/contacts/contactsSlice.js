import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContactThunk, deleteContactThunk } from './contactsSlice.operations';

const initialState = {
  contacts: [{
    items: [],
    isLoading: false,
    error: null,
  },],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
state.contacts.contacts = action.payload
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })

      .addCase(addContactThunk.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);

      })
      
      .addCase(addContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
        
      .addCase(deleteContactThunk.pending, (state) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.contacts = state.contacts.items.filter(
    (contact) => contact.id !== action.payload
  )
})
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      
  },
});

export const contactsReducer = contactsSlice.reducer;