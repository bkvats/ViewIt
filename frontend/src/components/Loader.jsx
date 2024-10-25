import React from 'react';

export default function Loader({ message = "", loaderBg = "#000000b7" }) {
    return (
        <div className="bg-[#000000b7] fixed top-0 left-0 flex flex-col gap-1 items-center justify-center h-full w-full animate-pulse z-50">
            <div className={`relative flex justify-center items-center`}>
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" className="absolute" alt="logo" width={40} />
                <div className="w-20 h-20 border-[6px] border-dashed rounded-full animate-slow-spin border-white">
                </div>
            </div>
            <p className="text-lg font-medium text-white">{message}</p>
        </div>
    );
};