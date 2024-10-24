import React from "react";
export default function ErrorComp({message, design}) {
    return (
        <p className={`text-red-700 font-medium ${design}`}>{message}</p>
    );
}