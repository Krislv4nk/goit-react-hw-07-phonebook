import React from 'react';
import { Contact } from "components/contacts/contacts";
import { selectContacts } from "../../redux/contacts/contactsSlice.selectors";
import {selectFilter } from "../../redux/filter/filterSlice.selectors";
import {  useSelector } from "react-redux";
import css from "./contactList.module.css";

export const ContactList = ({handleDeleteBtnClick}) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
  name && name.toLowerCase().includes(filter.trim().toLowerCase()));


  
return (
  <ul className={css.contactList}>
    { filteredContacts.map(({ name, number, id }) => (
      <Contact 
        key={id}
        id={id}
        name={name}
        number={number}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    ))}
  </ul>)
}