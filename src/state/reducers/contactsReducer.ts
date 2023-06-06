import { Contact } from "../../types/type";
import {
  FETCH_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../action-creators/contactsActionTypes";

interface actionType {
  type: string;
  payload: Contact;
}

// const initialState: Contact[] = [];
const initialState: Contact[] = [
  {
    id: 1,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 2,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 3,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 4,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 5,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 6,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 7,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 8,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 9,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 10,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
  {
    id: 11,
    firstName: "sudeep",
    lastName: "sharma",
    isActive: true,
  },
];

const contactsReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return state;

    case ADD_CONTACT:
      return [...state, action.payload];

    case EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);

    default:
      return state;
  }
};

export default contactsReducer;
