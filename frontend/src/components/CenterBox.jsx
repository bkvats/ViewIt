import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import Loader from "./Loader";
export default function CenterBox({isVisible, children, parentDesign, closeEventHandler, loading = false}) {
    useEffect(() => {
        if (isVisible) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isVisible]);
    return (
        <div className={`fixed left-0 top-0 min-h-screen w-full bg-[#000000e4] z-50 flex justify-center items-center ${isVisible ? "scale-100" : "scale-0"} transition-transform`}>
            <div className={`bg-white min-h-52 min-w-80 text-2xl text-black rounded-2xl relative ${parentDesign}`}>
                <CloseButton design={"absolute top-0 right-0 m-2"} eventHandler={closeEventHandler}/>
                {children}
                {loading && <Loader loaderBg={"white"}/>}
            </div>
        </div>
    );
}