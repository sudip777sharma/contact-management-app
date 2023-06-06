import React, { useEffect } from "react";
import { BsFillBox2HeartFill, BsDatabaseFillAdd } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import {
    MdCategory,
    MdAssignmentAdd,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
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
    const [isHoverActive, setIsHoverActive] = React.useState(false);

    const handleIsHoverActive = () => {
        localStorage.setItem("isHoverActive", JSON.stringify(!isHoverActive));
        setIsHoverActive((currentValue) => !currentValue);
    };

    useEffect(() => {
        const isHoverActive = localStorage.getItem("isHoverActive");
        setIsHoverActive(isHoverActive === "true" ? true : false);
    }, []);

    return (
        <div
            className={`group h-screen cursor-pointer fixed top-0 z-50 flex-col gap-4  py-10 transition-all duration-300 dark:bg-[#0e1421] md:flex ${isHoverActive ? "w-16 hover:w-64" : "w-64"
                }`}
        >

            <div
                className=""
            >
                {/* <RxHamburgerMenu/> */}
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
        </div>
    );
};

export default Sidebar;
