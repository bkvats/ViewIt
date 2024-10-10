import React from "react";
export default function BasicInput({type, title, value, setValue, className = ""}) {
    return (
        <input type={type} placeholder={title} value={value} onChange={(e) => {
            setValue(e.target.value);
        }} className={`w-full bg-[#80819100] outline-none rounded-sm p-2 border-white border-[1px] font-light text-xl focus:border-slate-400 focus:border-[3px] ${className}`}/>
    )
}