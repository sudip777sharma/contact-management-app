import React, { ReactNode } from 'react';
import { darkCardColor, lightCardColor } from '../constants/cssColor';
import { useSelector } from 'react-redux';
import { appState } from '../types/type';

interface CardProps {
    children: ReactNode;
    title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
    const { darkMode } = useSelector((state: appState) => state);
    return (
        <div className={`${darkMode ? `bg-[#1F2937]` : `bg-white`} shadow-md rounded-lg w-fit h-full flex flex-col items-center justify-center gap-1 overflow-auto mx-auto mt-3 p-2`}>
            <h1
                className={`${darkMode ? `text-white` : 'text-black'} text-2xl font-bold text-center `}
            >{title}</h1>
            <div className="p-2">
                {children}
            </div>
        </div>
    );
};

export default Card;

