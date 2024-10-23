import React, { useEffect, useRef, useState } from "react";
import VideoCard from "../VideoCard";
import PlayListCard from "../PlayListCard";
export default function ChannelVideosBar({playlist = false}) {
    const videos = [];
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    for (let i = 0; i < 8; i++) videos.push({});
    const barRef = useRef();
    function checkScrollPosition() {
        if (barRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = barRef.current;
            setCanScrollRight(scrollLeft > 0);
            setCanScrollLeft(scrollLeft + clientWidth < scrollWidth);
        }
    }
    useEffect(() => {
        if (barRef.current) {
            checkScrollPosition();
            barRef.current.addEventListener("scroll", checkScrollPosition);
        }
        return () => {
            if (barRef.current) {
                barRef.current.removeEventListener("scroll", checkScrollPosition);
            }
        }
    })
    return (
        <>
            <div ref={barRef} className="relative flex no-scrollbar overflow-auto lg:overflow-hidden">
                {
                    videos.map((i) => (
                        playlist ? <PlayListCard {...i} /> : <VideoCard {...i} />
                    ))
                }
            </div>
            {canScrollRight && <button className={`bg-[#000000ba] absolute top-1/2 left-0 rounded-full p-2 z-10 rotate-180 shadow-lg shadow-black`} onClick={() => {
                if (barRef.current) {
                    barRef.current.scrollBy({ left: -300, behavior: "smooth" })
                }
            }}><img src="src\components\images\right-arrow.svg" alt="arrow" /></button>}
            {canScrollLeft && <button className={`bg-[#000000ba] absolute top-1/2 right-[-15px] rounded-full p-2 z-10 shadow-lg shadow-black`} onClick={() => {
                if (barRef.current) {
                    barRef.current.scrollBy({ left: 300, behavior: "smooth" })
                }
            }}><img src="src\components\images\right-arrow.svg" alt="arrow" /></button>}
        </>
    )
}