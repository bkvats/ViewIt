import React, { useRef } from "react";
import VideoCard from "../VideoCard";
export default function ChannelVideosBar() {
    const videos = [];
    for (let i = 0; i < 15; i++) videos.push({});
    const barRef = useRef();
    return (
        <>
            <div ref={barRef} className="relative flex overflow-auto lg:overflow-hidden">
                {
                    videos.map((i) => (
                        <VideoCard {...i} />
                    ))
                }
            </div>
            <button className={`bg-[#000000] absolute top-1/2 left-0 rounded-full p-2 z-50 border border-white rotate-180`} onClick={() => {
                if (barRef.current) {
                    barRef.current.scrollBy({ left: -300, behavior: "smooth" })
                }
            }}><img src="src\components\images\right-arrow.svg" alt="arrow" /></button>
            <button className={`bg-[#000000] absolute top-1/2 right-[-15px] rounded-full p-2 z-10 border border-white`} onClick={() => {
                if (barRef.current) {
                    barRef.current.scrollBy({ left: 300, behavior: "smooth" })
                }
            }}><img src="src\components\images\right-arrow.svg" alt="arrow" /></button>
        </>
    )
}