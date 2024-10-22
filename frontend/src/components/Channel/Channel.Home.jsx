import React from "react";
import VideoCard from "../VideoCard";
import { useSelector } from "react-redux";
import ChannelVideosBar from "./Channel.VideosBar";
export default function ChannelHome() {
    const videos = [];
    for (let i = 0; i < 15; i++) videos.push({});
    const playlist = [];
    const {userData} = useSelector(state => state.auth);
    return (
        <div className="mt-4 flex flex-wrap gap-4 justify-center relative">
            <ChannelVideosBar />
        </div>
    );
}