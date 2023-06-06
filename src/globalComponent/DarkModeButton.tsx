import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../state/action-creators/darkModeActions'
import { appState } from '../types/type';

const DarkModeButton: React.FC = () => {
    const { darkMode } = useSelector((state: appState) => state);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <button
            onClick={handleToggle}
            className={`flex font-bold items-center justify-center w-10 h-10 rounded-full ${!darkMode ? 'bg-gray-800' : 'bg-gray-600'
                }`}
        >
            <span className={`text-gray-300 ${darkMode ? 'hidden' : 'block'}`}>
                <BsFillMoonStarsFill />
            </span>
            <span className={`text-white ${darkMode ? 'block' : 'hidden'}`}>
                <BsFillSunFill />
            </span>
        </button>
    );
};

export default DarkModeButton;
