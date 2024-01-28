import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectContactsIsLoading = createSelector(
    selectContacts,
    contacts => contacts.contacts.isLoading
);
export const selectContactsIsError = createSelector(
    selectContacts,
    contacts => contacts.contacts.error
);

export const selectContactsItems = createSelector(
    selectContacts,
    contacts => contacts.contacts.items
);

