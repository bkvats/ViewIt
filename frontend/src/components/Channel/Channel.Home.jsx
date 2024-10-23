import React from "react";
import VideoCard from "../VideoCard";
import { useSelector } from "react-redux";
import ChannelVideosBar from "./Channel.VideosBar";
export default function ChannelHome() {
    const videos = [];
    for (let i = 0; i < 15; i++) videos.push({});
    const playlist = [];
    const { userData } = useSelector(state => state.auth);
    return (
        <div className="mt-10">
            <div className="my-4">
                <h1 className="text-3xl font-bold mb-2">Latest Videos</h1>
                <hr />
                <div className="relative">
                    <ChannelVideosBar />
                </div>
            </div>
            <div className="my-4">
                <h1 className="text-3xl font-bold mb-2">Popular videos</h1>
                <hr />
                <div className="relative">
                    <ChannelVideosBar />
                </div>
            </div>
            <div className="my-4">
                <h1 className="text-3xl font-bold mb-2">Created playlists</h1>
                <hr />
                <div className="relative mt-4">
                    <ChannelVideosBar playlist={true}/>
                </div>
            </div>
        </div>
    );
}