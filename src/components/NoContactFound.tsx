import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { appState } from '../types/type';

const NoContactFound: React.FC = () => {
    const { darkMode } = useSelector((state: appState) => state);
    return (
        <div
            className={`${darkMode ? `bg-[#111827] text-white` : `bg-[#F3F4F6] text-black`} min-h-screen flex flex-col items-center justify-center`}
        >
            <h2 className="text-3xl font-bold mb-4">No Contacts Found</h2>
            <p className="text-gray-600 mb-8">Please add a contact using the button below.</p>
            <Link to="/add-contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Create Contact
            </Link>
        </div>
    );
};

export default NoContactFound;
