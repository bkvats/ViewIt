import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
export default function Channel() {
    const { userData } = useSelector(state => state.auth);
    return (
        <>
            <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729537747/istockphoto-1422735620-612x612_zr06bg.jpg" alt="cover-image" className="mx-auto my-4 w-full h-[16%] md:h-1/3 object-cover object-center rounded-lg" />
            <hr />
            <div className="mt-4 border- border-red-500 flex flex-col justify-center lg:items-center lg:flex-row gap-2">
                <img src={userData.avatar} alt="avatar" className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white" />
                <div>
                    <h1 className="font-extrabold text-4xl lg:text-6xl">{userData.firstname} {userData.lastname}</h1>
                    <div className="flex gap-4 items-center">
                        <span className="text-xl">@{userData.username}</span>
                        <PrimaryButton title={"Subscribe"} className={"bg-white text-black font-semibold mt-0"} />
                    </div>
                    <div className="flex gap-2 text-xl my-2 font-semibold">
                        <span>100M subscribers</span>
                        <span>|</span>
                        <span>1k videos</span>
                    </div>
                    <span className="text-lg text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam ex itaque saepe modi molestias assumenda omnis corrupti fuga numquam earum doloribus unde ea at ipsum alias, nam nihil aperiam.</span>
                </div>
            </div>
        </>
    )
}