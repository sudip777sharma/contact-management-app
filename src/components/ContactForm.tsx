import React, { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';
import Card from '../globalComponent/Card';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../state/action-creators/contactsActions';

import { useNavigate } from 'react-router-dom';
import { Contact, appState } from '../types/type';

const ContactForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isActive, setIsActive] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { darkMode } = useSelector((state: appState) => state);

    // const queryClient = useQueryClient();

    // const addContactMutation = useMutation((newContact: Contact) => {
    //     return axios.post('/api/contacts', newContact).then((response) => response.data);
    // }, {
    //     onSuccess: () => {
    //         queryClient.invalidateQueries('contacts');
    //     },
    // });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (firstName.trim() === '' || lastName.trim() === '') {
            return;
        }

        const newContact: Contact = {
            id: Date.now(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            isActive,
        };

        dispatch(addContact(newContact));

        // addContactMutation.mutate(newContact);

        setFirstName('');
        setLastName('');
        setIsActive(true);

        navigate('/');
    };

    return (
        <div
            className={`${darkMode ? `bg-[#111827] text-white` : `bg-[#F3F4F6] text-black`} min-h-screen flex flex-col items-center justify-center h-full`}
        >
            <Card children={
                <form onSubmit={handleSubmit} className="p-5 md:p-12">
                    <div className="mb-2">
                        <label htmlFor="firstName" className="block font-bold text-gray-700 mb-1">
                            First Name
                        </label>
                        <input
                            placeholder='First Name'
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="text-black border border-gray-400 outline-none rounded px-2 py-1"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="lastName" className="block font-bold text-gray-700 mb-1">
                            Last Name
                        </label>
                        <input
                            placeholder='Last Name'
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="text-black border border-gray-400 outline-none rounded px-2 py-1"
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="isActive" className="block font-bold text-gray-700 mb-1">
                            Active
                        </label>
                        <input
                            type="checkbox"
                            id="isActive"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            className="mr-2"
                        />
                    </div>

                    <button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Contact
                    </button>
                </form>
            }
                title="Create Contact"
            />
        </div>
    );
};

export default ContactForm;
