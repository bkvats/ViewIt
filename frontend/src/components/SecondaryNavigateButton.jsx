import React from "react";
import { Link } from "react-router-dom";
export default function SecondaryNavigateButton({to = "#", title, className = ""}) {
    return (
        <Link to={to} className={`bg-[#0db0bc00] font-light py-1 px-4 rounded-md text-xl hover:underline ${className}`}>{title}</Link>
    );
}