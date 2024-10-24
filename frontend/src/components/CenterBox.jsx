import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
export default function CenterBox({children, parentDesign, closeEventHandler}) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);
    return (
        <div className="absolute top-0 right-0 min-h-screen w-full bg-[#000000e4] z-50 flex justify-center items-center">
            <div className={`bg-white min-h-52 min-w-80 text-2xl text-black rounded-2xl relative ${parentDesign}`}>
                <CloseButton design={"absolute top-0 right-0 m-2"} eventHandler={closeEventHandler}/>
                {children}
            </div>
        </div>
    );
}