import React, { useRef, useState } from "react";
import PrimaryButton from "./PrimaryButton";
export default function UploadAvatar({name, setValue, setError, imageUrl, setImageUrl, setAvatarFile}) {
    const inputRef = useRef(null);
    return (
        <div className="flex flex-col justify-self-center self-center relative">
            <img src={imageUrl} className="rounded-full border-2 border-white w-52 h-52 object-cover object-center p-2" alt=""/>
            <PrimaryButton title={"Change avatar"} className={"bg-red-600 font-normal"} eventHandler={() => {
                inputRef.current.click();
            }}/>
            <input ref={inputRef} type="file" name="" onChange={(event) => {
                setError("");
                const file = event.target.files[0];
                if (file.size > (10 * 1024 * 1024)) {
                    setError("Profile pic should be less then 10 MB");
                    return;
                }
                if (!["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(file.type)) {
                    setError("Invalid file type. Please upload jpg/png/webp image only!");
                    return;
                }
                setAvatarFile(file);
                setImageUrl(URL.createObjectURL(file));
            }} hidden/>
        </div>
    );
}