import React, { useEffect } from "react";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from 'react-icons/rx';

import { BiHomeSmile } from "react-icons/bi";
import {
    MdCategory,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Button from "../globalComponent/Button";
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
    {
        name: "Dashboard",
        icon: <BiHomeSmile />,
        link: "/",
    },
    {
        name: "Contacts",
        icon: <BsFillBox2HeartFill />,
        link: "/",
    },
    {
        name: "Charts & Maps",
        icon: <MdCategory />,
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

    const [isHamBurgerActive, setIsHamBurgerActive] = React.useState(false);

    const handleIsHoverActive = () => {
        localStorage.setItem("isHoverActive", JSON.stringify(!isHoverActive));
        setIsHoverActive((currentValue) => !currentValue);
    };

    useEffect(() => {
        const isHoverActive = localStorage.getItem("isHoverActive");
        setIsHoverActive(isHoverActive === "true" ? true : false);
    }, []);

    const HoverBtnComp = () => {
        return (
            <div>
                <Button
                    aria-label="Toggle Sidebar"
                    onClick={handleIsHoverActive}
                    className={`absolute -right-5 top-3 z-[11] w-fit rounded-md bg-white p-2  dark:bg-[#1F2937]`}
                >
                    <MdKeyboardDoubleArrowRight
                        style={{ color: `${isHoverActive ? 'white' : 'gray'}` }}
                        className={`transform text-2xl text-gray-700 transition-all duration-300 group-hover:rotate-[-180deg] dark:text-gray-400 dark:hover:text-gray-300 ${isHoverActive
                            ? "rotate-[360deg] drop-shadow-2xl "
                            : "rotate-[-180deg]"
                            }`}
                    />
                </Button>
            </div>
        )
    }

    const SidebarInnerContentComp = () => {
        return (
            <>
                {sidebarItems.map((item) => (
                    <div
                        onClick={() => navigate(item.link)}
                        key={item.name}
                        className={`mx-2 flex items-center gap-5 rounded-md p-3 text-gray-400 hover:dark:text-gray-500`}
                    >
                        <span className="text-2xl">{item.icon}</span>
                        <span
                            className={`truncate ${isHoverActive ? "hidden group-hover:block" : ""
                                } `}
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
            className={`group h-screen cursor-pointer fixed top-0 z-50 flex-col gap-4  py-10 transition-all duration-300 dark:bg-[#0e1421] md:flex ${isHoverActive ? "w-16 hover:w-64" : "w-64"
                }`}
        >
            <HoverBtnComp />
            <SidebarInnerContentComp />
        </div>
    ) : (
        <div
            className="fixed z-50"
        >
            <RxHamburgerMenu
                onClick={() => setIsHamBurgerActive((prev) => !prev)}
                style={{ height: '35px', width: '35px', borderRadius: '5px', backgroundColor: '#374151', color: 'white', padding: '5px' }}
                className="absolute top-5 left-5 z-50"
            />
            {
                isHamBurgerActive && (
                    <div
                        className={`group h-screen cursor-pointer fixed top-0 z-50 flex flex-col gap-4 py-5 transition-all duration-300 dark:bg-[#0e1421] md:flex ${isHoverActive ? "w-16 hover:w-64" : "w-64"
                            }`}
                    >
                        <div
                            className={`flex items-center justify-end gap-5 rounded-md`}
                        >
                            <GrClose
                                onClick={() => setIsHamBurgerActive((prev) => !prev)}
                                style={{ height: '35px', width: '35px', borderRadius: '5px', backgroundColor: '#374151', color: 'white', padding: '5px', marginRight: '14px' }}
                            />
                        </div>
                        <SidebarInnerContentComp />
                    </div>
                )
            }
        </div >
    )
};

export default Sidebar;
