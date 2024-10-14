import React, {useState} from "react";
export default function BasicInput({ type, name, placeholder, value, setValue, className = "", setError }) {
    const [inputType, setInputType] = useState(type);
    if (type === "password") {
        return (
            <div className="flex gap-2">
                <input type={inputType} name={name} placeholder={placeholder} value={value} onChange={(e) => {
                    setError("");
                    setValue(e.target.value);
                }} className={`w-full bg-[#80819100] outline-none rounded-sm p-2 border-white border-[1px] font-light text-xl focus:border-slate-400 focus:border-[3px] ${className}`} />
                <button onClick={() => {
                    if (inputType === "password") setInputType("text");
                    else setInputType("password");
                }}>
                    <img src={`${inputType === "password" ? "https://res.cloudinary.com/duhmeadz6/image/upload/v1728928076/eye-show_bmptkm.svg" : "https://res.cloudinary.com/duhmeadz6/image/upload/v1728928076/eye-hide_nyxvud.svg"}`} alt="" width={30}/>
                </button>
            </div>
        );
    }
    return (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={(e) => {
            setError("");
            setValue(e.target.value);
        }} className={`w-full bg-[#80819100] outline-none rounded-sm p-2 border-white border-[1px] font-light text-xl focus:border-slate-400 focus:border-[3px] ${className}`} />
    )
}