import React, { useState } from 'react';
import { Contact, appState } from '../types/type';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../globalComponent/Card';
import { editContact } from '../state/action-creators/contactsActions';
const EditContactDetails: React.FC = () => {

    // debugger;
    const { id } = useParams<{ id: string }>();
    const { contacts } = useSelector((state: appState) => state);
    // console.log(id);
    const contactId = id !== undefined ? parseInt(id) : 0;
    const contact = contacts.filter((curContact) => curContact.id === contactId)[0];


    const [firstName, setFirstName] = useState<string>(contact ? contact.firstName : '');
    const [lastName, setLastName] = useState<string>(contact ? contact.lastName : '');
    const [isActive, setIsActive] = useState<boolean>(contact ? contact.isActive : false);

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
            id: contact.id,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            isActive,
        };

        dispatch(editContact(newContact));

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
                        Update Contact
                    </button>
                </form>
            }
                title="Update Contact"
            />
        </div>
    );
};

export default EditContactDetails;
