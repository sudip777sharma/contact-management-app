import React, { } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'
import { ContactDetailPropType, appState } from '../types/type';
import { useSelector } from 'react-redux';

const ContactDetails: React.FC<ContactDetailPropType> = ({
    contact,
    toggleViewMap,
    handleToggleView,
}) => {

    const { darkMode } = useSelector((state: appState) => state);
    return (
        <div
            className='p-4 relative'
        >
            <AiFillCloseCircle
                onClick={() => handleToggleView(contact.id)}
                style={{ color: 'red', height: '30px', width: '30px', position: 'absolute', top: '20px', right: '20px' }} />
            <div
                className={`${darkMode ? 'bg-[#111827]' : 'bg-white'} rounded-md p-5`}
            >
                <h1>Contact Details</h1>
                <p>First name: {contact.firstName}</p>
                <p>Last name: {contact.lastName}</p>
                <p>Status: {contact.isActive ? 'Active' : 'Inactive'}</p>
            </div>
        </div>
    );
};

export default ContactDetails;
