import React, { useState } from "react";
export default function Header() {
    const [search, setSearch] = useState("");
    return (
        <header className="flex justify-between items-center mb-2 md:px-14 px-2 py-3">
            <div className="w-full flex justify-between items-center md:w-1/2">
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                <div className={`w-3/4 bg-[#808191] flex justify-between items-center rounded-lg`}>
                    <input value = {search} onChange = {(e) => {
                        setSearch(e.target.value);
                    }} className={`w-full bg-[#808191] outline-none rounded-md px-4 py-2`} type="search" name="" id="" placeholder="Search" />
                    <button className="px-4"><img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/search_rir2iz.svg" alt="search" width={20} /></button>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/bell-icon_daxgfh.svg" className="mx-8 cursor-pointer" alt="" width={25}/>
            </div>
        </header>
    );
}