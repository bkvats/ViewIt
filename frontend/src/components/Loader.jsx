import React from 'react';

export default function Loader({message = ""}) {
    return (
        <div style={{borderRadius: "inherit"}} className="bg-[#000000b7] absolute top-0 left-0 flex flex-col space-y-4 items-center justify-center h-full w-full rounded-inherit">
            <div className="w-20 h-20 border-[6px] border-dashed rounded-full animate-slow-spin border-white">
            </div>
            <p className="text-lg font-medium text-white">{message}</p>
        </div>
    );
};