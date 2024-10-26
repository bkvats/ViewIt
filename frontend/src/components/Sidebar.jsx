import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
    const [showSideBar, setShowSideBar] = useState(false);
    const sideBarRef = useRef();
    const {userData} = useSelector(state => state.auth);
    const links = [
        {
            name: "Home",
            to: "/",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707336/home-icon_y2bloi.svg"
        },
        {
            name: "Subscription",
            to: "/subscription",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707385/subscription-icon_ee5pmh.svg"
        },
        {
            name: "Your Channel",
            to: "/channel",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707411/channe-iconl_kxgn4p.svg",
            locations: ["/channel", "/channel/videos", "/channel/playlists"]
        },
        {
            name: "History",
            to: "/history",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707448/history-icon_tfkyua.svg"
        },
        {
            name: "Playlists",
            to: "/playlists",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707448/history-icon_tfkyua.svg"
        },
        {
            name: "Liked videos",
            to: "/liked-videos",
            imageUrl: "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707503/liked-icon_kubf5s.svg"
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
    useEffect(() => {
        sideBarRef.current.addEventListener("scroll", (event) => {
            event.preventDefault();
        })
    })
    return (
        <>
            <button className={`bg-[#000000] fixed rounded-full p-2 lg:hidden z-10 border border-white ${showSideBar ? "left-[60%] rotate-180 border border-white top-1/2 hidden" : "left-[-20px]"}`} onClick={() => {
                setShowSideBar(!showSideBar);
            }}><img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729707225/right-arrow_llw4nb.svg" alt="arrow" /></button>
            <div className={`${showSideBar ? "border-r" : "translate-x-[-100%] lg:translate-x-0"} transition-transform duration-500 ease-in-out bg-[#1F1D2B] w-[70%] lg:block lg:w-1/6 fixed top-0 left-0 pt-14 h-screen z-10`} ref={sideBarRef}>
                <ul className="">
                    {
                        links.map((i) => (
                            <li key={i.name}>
                                <NavLink to={i.to} className={({ isActive }) => `${isActive ? (i.locations ? (i.locations.includes(window.location.pathname) ? "bg-[#00000076] border-b border-white font-bold" : "") : "bg-[#00000076] border-b border-white font-bold") : ""} flex gap-2 items-center justify-start p-2 my-4 hover:border-white hover:border-b`} onClick={() => {
                                    setShowSideBar(false);
                                }}>
                                    <img src={i.imageUrl} alt={i.name} />
                                    <span className="text-xl">{i.name}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                {showSideBar && <button className={`bg-[#000000] absolute rounded-full p-4 lg:hidden z-10 right-[-30px] border border-white animate-bounce top-[35%]`} onClick={() => {
                    setShowSideBar(!showSideBar);
                }}>
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729707280/left-arrow_m6e76j.svg" alt="arrow" /></button>}
                {/* <div className="bg-[#00000076] border-t border-white text-center mt-64 lg:mt-24">
                    <p>&copy; Copyright 2024.</p>
                    <p>Handcrafted with ❤</p>
                    <h1>by Bhupender Kr. Sharma</h1>
                </div> */}
            </div>
        </>
    );
}