import React from "react";
export default function BasicInput({type, name, placeholder, value, setValue, className = "", setError}) {
    return (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={(e) => {
            setError("");
            setValue(e.target.value);
        }} className={`w-full bg-[#80819100] outline-none rounded-sm p-2 border-white border-[1px] font-light text-xl focus:border-slate-400 focus:border-[3px] ${className}`}/>
    )
}