import React from "react";
import { Link } from "react-router-dom";
export default function PrimaryNavigateButton({to = "#", title, className = ""}) {
    return (
        <Link to={to} className={`bg-[#0DAABC] font-light py-1 px-4 rounded-md text-xl hover:bg-opacity-70 ${className}`}>{title}</Link>
    );
}