import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import VideoCard from "../VideoCard";
import { useOutletContext } from 'react-router-dom';
export default function ChannelVideos() {
    const { temp } = useOutletContext();
    console.log(temp);
    const [filterButtons, setFilterButtons] = useState([
        {
            title: "Latest",
            isActive: true,
        },
        {
            title: "Popular",
            isActive: false,
        },
        {
            title: "Oldest",
            isActive: false,
        }
    ]);
    const videos = [];
    for (let i = 0; i < 9; i++) videos.push({});
    // function loadInfiniteItems() {
    //     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {

    //     }
    // }
    return (
        <div className="mt-4">
            <div className="flex gap-4 my-4">
                {
                    filterButtons.map((i, index) => (
                        <PrimaryButton {...i} key={i.title} className={`${!i.isActive && "!bg-[#00000000] text-white border-white border"} bg-white text-black hover:bg-opacity-100 font-normal`} eventHandler={() => {
                            setFilterButtons(filterButtons.map(element => ({ title: element.title, isActive: element.title == i.title })));
                        }} />
                    ))
                }
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
                {
                    videos.map(i => <VideoCard {...i} />)
                }
            </div>
        </div>
    );
}