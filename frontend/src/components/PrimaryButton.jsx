import React from "react";
import { Link } from "react-router-dom";
export default function PrimaryButton({eventHandler, title, className = ""}) {
    return (
        <Link onClick={eventHandler} className={`bg-[#0DAABC] self-end font-light py-1 px-4 rounded-md text-xl hover:bg-opacity-70 ${className}`}>{title}</Link>
    );
}