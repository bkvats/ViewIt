import React from "react";
import { Link } from "react-router-dom";
export default function SecondaryButton({eventHandler, title, className = ""}) {
    return (
        <button onClick = {eventHandler} className={`bg-[#0db0bc00] font-light py-1 px-4 rounded-md text-xl hover:underline ${className}`}>{title}</button>
    );
}