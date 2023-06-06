import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../globalComponent/AddButton';
import NoContactFound from '../components/NoContactFound';
import { appState } from '../types/type';

const Contacts = () => {
    const { darkMode, contacts } = useSelector((state: appState) => state);
    return contacts.length == 0 ? (
        <div
            className={`min-h-screen ${darkMode ? `bg-[#111827] text-white` : `bg-white text-black`} `}
        >
            <NoContactFound />
        </div>
    ) : (
        <div
            className={`pt-16 min-h-screen ${darkMode ? `bg-[#111827] text-white` : `bg-white text-black`} `}
        >
            <ContactList />
            <AddButton />
        </div>
    );
};

export default Contacts;
