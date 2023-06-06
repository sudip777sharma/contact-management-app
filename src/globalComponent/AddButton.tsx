import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

const AddButton: React.FC = () => {
    return (
        <Link
            to="/add-contact"
            className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300"
        >
            <FiPlus size={24} />
        </Link>
    );
};

export default AddButton;
