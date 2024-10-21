import React, { useState } from "react";
import {NavLink} from "react-router-dom";
export default function Sidebar() {
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
    return (
        <div className="lg:w-1/6 sticky top-0 h-screen mx-1">
            <ul>
                {
                    links.map((i) => (
                        <li key={i.name}>
                            <NavLink to={i.to} className={({isActive}) => `${isActive ? "bg-[#00000076] rounded-xl border-[1px] border-white font-bold" : ""} flex gap-2 items-center justify-start my-4 mx-1 p-2`}>
                                <img src={`src/components/images/normal-${i.imageUrl}.svg`} alt="logo" />
                                <span className="hidden lg:block text-xl">{i.name}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}