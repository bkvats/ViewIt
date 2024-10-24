import React from "react";
export default function CloseButton({eventHandler, design}) {
    return (
        <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729707639/close_csliae.svg" alt="close" width={35} className={`hover:bg-black bg-[#000000b0] hover:scale-105 p-2 rounded-full cursor-pointer ${design}`} onClick={eventHandler}/>
    );
}