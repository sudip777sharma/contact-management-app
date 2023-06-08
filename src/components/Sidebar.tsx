import React, { useEffect, useState } from "react";
import { TiContacts } from "react-icons/ti";
import { BiBarChartSquare } from 'react-icons/bi'
import { TbLayoutDashboard } from 'react-icons/tb'
import { BsCode } from 'react-icons/bs'
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from 'react-icons/rx';

import { BiHomeSmile } from "react-icons/bi";
import {
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
    {
        name: "Dashboard",
        icon: <TbLayoutDashboard
            style={{ width: '2rem', height: '2rem' }}
        />,
        link: "/",
    },
    {
        name: "Home",
        icon: <BiHomeSmile
            style={{ width: '2rem', height: '2rem' }}
        />,
        link: "/",
    },
    {
        name: "Contacts",
        icon: <TiContacts
            style={{ width: '2rem', height: '2rem' }}
        />,
        link: "/",
    },
    {
        name: "Charts & Maps",
        icon: <BiBarChartSquare
            style={{ width: '2rem', height: '2rem' }}
        />,
        link: "/charts-and-maps",
    },
];

const Sidebar = () => {
    const navigate = useNavigate();

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    });

    const [isHoverActive, setIsHoverActive] = React.useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(window.innerWidth > 425 ? true : false);
    const [isHamBurgerActive, setIsHamBurgerActive] = React.useState(false);

    const handleIsHoverActive = () => {
        localStorage.setItem("isHoverActive", JSON.stringify(!isHoverActive));
        setIsHoverActive((currentValue) => !currentValue);
    };

    useEffect(() => {
        const isHoverActive = localStorage.getItem("isHoverActive");
        setIsHoverActive(isHoverActive === "true" ? true : false);
    }, []);

    const SidebarInnerContentComp = () => {
        return (
            <>
                {sidebarItems.map((item) => (
                    <div
                        className={`w-full h-16 flex items-center justify-center md:justify-start md:pl-4 mb-1 gap-5 text-gray-400 hover:text-white hover:bg-[#111827]`}
                        onClick={() => { navigate(item.link); }}
                        key={item.name}
                    >
                        <span
                            className={``}
                        >{item.icon}</span>
                        <span
                            className={`truncate hidden ${isHoverActive ? 'group-hover:block' : ''}`}
                        >
                            {item.name}
                        </span>
                    </div>
                ))}
            </>
        )
    }

    return screenWidth > 425 ? (
        <div
            className={`group h-screen fixed z-50 flex justify-between items-center ${isSidebarActive ? '' : '-translate-x-full'} transition duration-300 ${isSidebarActive && isHoverActive ? 'w-16 hover:w-64' : 'w-16'} transition-all duration-1000 text-white bg-[#1F2937] cursor-pointer`}
        >
            <div
                className={`relative h-screen w-full pt-20`}
            >
                <div
                    className={``}
                >
                    <SidebarInnerContentComp />
                </div>
                <div
                    onClick={() => setIsHoverActive((prev) => !(prev))}
                    className={`absolute top-5 -right-[1rem] bg-[#374151] hover:bg-[#303947] rounded-md ${isHoverActive ? 'text-white' : 'text-gray-500'}`}
                >
                    <BsCode
                        style={{ width: '2rem', height: '2rem' }}
                    />
                </div>
                <div
                    className={`flex items-center justify-center absolute -right-7 h-8 top-1/2 transform -translate-y-1/2 w-7 rounded-r-3xl bg-[#374151] hover:bg-[#303947] ${isSidebarActive ? 'text-white' : 'text-gray-500'}`}
                    onClick={() => setIsSidebarActive((prev) => !prev)}
                >
                    <MdKeyboardDoubleArrowRight
                        style={{ width: '2rem', height: '2rem' }}
                        className={``}
                    />
                </div>
            </div>
        </div>
    ) : (
        <>
            <div
                className={`fixed h-20 w-16 flex items-center justify-center z-50`}
            >
                <RxHamburgerMenu
                    onClick={() => setIsHamBurgerActive((prev) => !prev)}
                    style={{ height: '35px', width: '35px', borderRadius: '5px', backgroundColor: '#374151', color: 'white', padding: '5px' }}
                />
            </div>
            <div
                className={`fixed bg-[#1F2937] h-screen z-50 ${isHamBurgerActive ? '' : '-translate-x-full'} transition-all duration-300 `}
            >
                <div
                    className={`w-16 h-screen`}
                >
                    <div
                        className={`h-20 w-full flex items-center justify-center bg-red-500`}
                    >
                        <AiOutlineClose
                            onClick={() => setIsHamBurgerActive((prev) => !prev)}
                            style={{ height: '2.5rem', width: '2.5rem', borderRadius: '5px', color: 'white', padding: '5px' }}
                        />
                    </div>

                    <div
                    >
                        <SidebarInnerContentComp />
                    </div>
                </div>
            </div >
        </>
    )
};

export default Sidebar;


