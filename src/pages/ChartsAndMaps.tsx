import React from 'react';
import Charts from '../components/Charts';
import Map from '../components/Map';
import BarGraph from '../components/BarGraph';
import Card from '../globalComponent/Card';
import { darkBgColor, lightBgColor } from '../constants/cssColor';
import { useSelector } from 'react-redux';
import { appState } from '../types/type';

const ChartsAndMaps = () => {

    const { darkMode } = useSelector((state: appState) => state);

    return (
        <div
            className={`${darkMode ? `bg-[#111827] text-white` : `bg-[#F3F4F6] text-black`} pb-5 w-full md:pl-[4.0rem]`}
        >
            <h1 className='pt-20 text-center'>Charts and Maps</h1>
            <div
                className={`flex flex-col md:flex-row gap-4 justify-center`}
            >
                <div
                    className='grid grid-cols-1 gap-4'
                >
                    <Charts />
                </div>
                <div
                    className='grid grid-cols-1 gap-4'
                >
                    <BarGraph />
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default ChartsAndMaps;
