import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
export default function PlayListCard({ thumbnail = "src/components/images/thumbnail.jpg", duration = "7:00", numberOfVideos = 0, channeName = "", channelAvatar = "", videoTitle = "" }) {
    const { userData } = useSelector(state => state.auth);
    return (
        <NavLink className="min-w-80 rounded-2xl bg-[#ffffff18] pb-1 m-4 hover:shadow hover:shadow-[#ffffff20] hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="relative flex justify-center">
                <img className="relative top-0 z-10 rounded-t-2xl min-w-full h-52 object-cover object-center shadow-lg shadow-[#00000076]" src={thumbnail} alt="thumbnail" />
                <span className="absolute bg-gray-600 font-bold top-0 right-0 m-2 py-0 px-2 rounded-lg text-md">{duration}</span>
                <span className="absolute bg-gray-600 font-bold bottom-0 left-0 m-2 py-0 px-2 rounded-lg text-md">{numberOfVideos} videos</span>
                <div className="absolute -top-4 rounded-t-2xl w-[93%] h-52 bg-gray-500"></div>
            </div>
            <div className="my-1 mx-5">
                <div className="relative flex items-start">
                    {channeName && <span className="max-w-[80%] text-xl text-[#ffffffcd] text-nowrap text-ellipsis overflow-hidden">{channeName}</span>}
                    {channelAvatar && <div className="absolute bottom-0 right-0 border-[2px] border-white p-[4px] rounded-full z-10">
                        <img className="rounded-full w-16 h-16" src={channelAvatar} />
                    </div>}
                </div>
                <div className="my-1">
                    <h2 className="line-clamp-2 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquid ipsum ipsam nemo, possimus cupiditate doloribus totam, porro ipsa aut quos beatae! Accusamus dicta distinctio magnam ea fuga ullam. Similique est velit laboriosam fugit soluta! Perspiciatis beatae iste obcaecati libero sit odio neque nostrum eaque rem error quas ipsam odit similique vitae enim</h2>
                    <div className="my-4">
                        <SecondaryButton title={"View full playlist"} className={"px-0"} />
                    </div>
                </div>
            </div>
        </NavLink>
    )
}