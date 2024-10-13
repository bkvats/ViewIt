import React from "react";
export default function ErrorComp({message}) {
    return (
        <p className="text-red-700 font-medium">{message}</p>
    );
}