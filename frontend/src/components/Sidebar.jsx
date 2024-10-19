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
    for (let i = 0; i < links.length; i++) {
        const [isActive, setIsActive] = useState(null);
        links[i] = {...links[i], isActive, setIsActive};
    };
    return (
        <div className="border-green-700 border-2 w-1/6">
            <ul>
                {
                    links.map((i) => (
                        <li key={i.name}>
                            <NavLink to={i.to} className={({isActive}) => `${isActive ? i.setIsActive(true) : i.setIsActive(false)} flex space-x-4 items-center justify-start my-4 mx-1`}>
                                <img src={`src/components/images/${i.isActive ? "active-" : "normal-"}${i.imageUrl}.svg`} alt="logo" />
                                <span className="text-xl">{i.name}</span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}