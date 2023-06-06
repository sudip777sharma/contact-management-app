import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import DarkModeButton from '../globalComponent/DarkModeButton';

const Navbar = () => {
    return (
        <nav className="fixed t-0 l-0 w-screen bg-gray-900 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl text-center w-full font-semibold hidden md:block">Contact Management App</h1>
                <div className="flex items-center justify-center space-x-4 w-full">
                    <input type="text" placeholder="Search" className="p-1 rounded-lg bg-gray-700 text-white" />
                    <div className="p-2 bg-gray-700 rounded-full">
                        <FaSearch className="text-white" />
                    </div>
                    <div className="p-2 bg-gray-700 rounded-full hidden md:block">
                        <FaUser className="text-white" />
                    </div>
                    <DarkModeButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

