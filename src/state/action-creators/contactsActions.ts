import { Contact } from "../../types/type";
import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "./contactsActionTypes";

export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
});

export const addContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const editContact = (contact: Contact) => ({
  type: EDIT_CONTACT,
  payload: contact,
});

export const deleteContact = (contact: Contact) => ({
  type: DELETE_CONTACT,
  payload: contact,
});
