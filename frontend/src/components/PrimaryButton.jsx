import React from "react";
export default function PrimaryButton({eventHandler, title, className = ""}) {
    return (
        <button onClick={eventHandler} className={`bg-[#0DAABC] mt-4 font-light py-1 px-4 rounded-lg text-xl hover:bg-opacity-70 ${className}`}>{title}</button>
    );
}