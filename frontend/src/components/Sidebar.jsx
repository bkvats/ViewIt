import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
    const [showSideBar, setShowSideBar] = useState(false);
    const links = [
        {
            name: "Home",
            to: "/",
            imageUrl: "home-icon"
        },
        {
            name: "Subscription",
            to: "/subscription",
            imageUrl: "subscription-icon"
        },
        {
            name: "Your Channel",
            to: "/channel",
            imageUrl: "channel-icon"
        },
        {
            name: "History",
            to: "/history",
            imageUrl: "history-icon"
        },
        {
            name: "Playlists",
            to: "/playlists",
            imageUrl: "playlists-icon"
        },
        {
            name: "Liked videos",
            to: "/liked-videos",
            imageUrl: "liked-icon"
        }
    ];
    useEffect(() => {
        if (showSideBar) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [showSideBar]);
    return (
        <>
            <button className={`bg-[#000000] fixed rounded-full p-2 lg:hidden z-10 border border-white ${showSideBar ? "left-[60%] rotate-180 border border-white top-1/2 hidden" : "left-[-20px]"}`} onClick={() => {
                setShowSideBar(!showSideBar);
            }}><img src="src\components\images\right-arrow.svg" alt="arrow" /></button>
            <div className={`${showSideBar ? "border-r" : "translate-x-[-100%] lg:translate-x-0"} transition-transform duration-500 ease-in-out bg-[#1F1D2B] w-[70%] lg:block lg:w-1/6 fixed lg:sticky top-14 left-0 h-screen z-10`}>
                <ul>
                    {
                        links.map((i) => (
                            <li key={i.name}>
                                <NavLink to={i.to} className={({ isActive }) => `${isActive ? "bg-[#00000076] border-b border-white font-bold" : ""} flex gap-2 items-center justify-start my-4 p-2 hover:border-white hover:border-b`} onClick={() => {
                                    setShowSideBar(false);
                                }}>
                                    <img src={`src/components/images/normal-${i.imageUrl}.svg`} alt="logo" />
                                    <span className="text-xl">{i.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {showSideBar && <button className={`bg-[#000000] absolute rounded-full p-4 lg:hidden z-10 right-[-30px] border border-white animate-bounce`} onClick={() => {
                setShowSideBar(!showSideBar);
            }}><img src="src\components\images\left-arrow.svg" alt="arrow" /></button>}
            </div>
        </>
    );
}