import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { getContacts } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { Contact, appState } from '../types/type';
import ContactDetails from './ContactDetails';
import { Link } from 'react-router-dom';

import { deleteContact } from '../state/action-creators/contactsActions';

const ContactList = () => {

    const dispatch = useDispatch();
    const { contacts, darkMode } = useSelector((state: appState) => state);

    const [toggleViewMap, setToggleViewMap] = useState<Map<number, boolean>>(new Map());

    const handleToggleView = (id: number) => {
        setToggleViewMap((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.set(id, !prevMap.get(id));
            return newMap;
        });
    };

    // const { data: contacts, isLoading } = useQuery('contacts', getContacts);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div
        >
            <h1
                className='text-center p-4'
            >All Contacts</h1>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full lg:grid-cols-3 gap-10 px-5 md:pl-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                {contacts.map((contact: Contact, index) => (
                    <div
                        key={contact.id}
                        className={`p-4 flex flex-col h-fit rounded shadow hover:shadow-lg transition duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                        <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                            {contact.firstName} {contact.lastName}
                        </p>
                        <p
                            className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >Status: {contact.isActive ? 'Active' : 'Inactive'}</p>
                        {
                            (toggleViewMap.get(contact.id)) && (
                                <ContactDetails
                                    contact={contact} toggleViewMap={toggleViewMap} handleToggleView={handleToggleView}
                                />
                            )
                        }
                        {
                            !(toggleViewMap.get(contact.id)) && (
                                <div className="flex flex-col justify-end gap-2 p-1 lg:flex-row">
                                    <button
                                        onClick={() => handleToggleView(contact.id)}
                                        className={`${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'} text-white px-2 py-1 rounded`}
                                    >
                                        View
                                    </button>
                                    <Link to={`/edit-contact/${contact.id}`}
                                        className={`flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded ${darkMode ? 'bg-opacity-90' : 'bg-opacity-100'}`}
                                    >
                                        <button
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => dispatch(deleteContact(contact))}
                                        className={`${darkMode ? 'bg-red-500 hover:bg-red-600' : 'bg-red-400 hover:bg-red-500'} text-white px-2 py-1 rounded`}
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;
