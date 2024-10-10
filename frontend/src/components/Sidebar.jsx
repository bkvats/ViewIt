import React from "react";
import Link from "./Link";
export default function Sidebar() {
    return (
        <div className="md:w-[15.5%] border-2 border-red-700">
            <Link imgUrl={"src/components/images/home.svg"} title={"Home"}/>
        </div>
    );
}