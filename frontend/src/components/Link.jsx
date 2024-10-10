import React from "react";
export default function Link({imgUrl, title}) {
    return (
        <div className="flex gap-2 items-center font-bold my-4">
            <img src={imgUrl} alt="" />
            <p>{title}</p>
        </div>
    );
}