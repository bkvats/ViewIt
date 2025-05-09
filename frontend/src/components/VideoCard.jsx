import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function VideoCard({thumbnail = "https://res.cloudinary.com/duhmeadz6/image/upload/v1729707756/thumbnail_cvabme.jpg" , duration = "7:00", channeName = "", channelAvatar = "", videoTitle = "", views = "12M", time = "2 years"}) {
    const {userData} = useSelector(state => state.auth);
    return (
        <div className="min-w-80 max-w-80 rounded-2xl cursor-pointer bg-[#ffffff18] pb-1 mx-2 my-4 hover:shadow-md hover:shadow-[#ffffff4f] hover:scale-105 transition-transform duration-200 ease-in-out">
            <div className="relative">
                <img className="rounded-t-2xl min-w-full h-52 object-cover object-center" src={thumbnail} alt="thumbnail"/>
                <span className="absolute bg-gray-600 font-bold top-0 right-0 m-2 py-0 px-2 rounded-lg text-md">{duration}</span>
            </div>
            <div className="my-1 mx-5 ">
                <div className="relative flex items-start">
                    {channeName && <span className="max-w-[80%] text-xl text-[#ffffffcd] text-nowrap text-ellipsis overflow-hidden">{channeName}</span>}
                    {channelAvatar && <div className="absolute bottom-0 right-0 border-[2px] border-white p-[4px] rounded-full">
                        <img className="rounded-full w-16 h-16" src={channelAvatar} />
                    </div>}
                </div>
                <div className="my-1">
                    <h2 className="line-clamp-2 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquid ipsum ipsam nemo, possimus cupiditate doloribus totam, porro ipsa aut quos beatae! Accusamus dicta distinctio magnam ea fuga ullam. Similique est velit laboriosam fugit soluta! Perspiciatis beatae iste obcaecati libero sit odio neque nostrum eaque rem error quas ipsam odit similique vitae enim</h2>
                    <div className="my-4 text-gray-300 font-black">
                        <span className="mr-4">{views} views</span>
                        <span>{time} ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}