import React from "react";
import PlayListCard from "../PlayListCard";
export default function ChannelPlaylists() {
    const videos = [];
    for (let i = 0; i < 9; i++) videos.push({});
    return (
        <div className="mt-10">
            <div className="my-4">
                <h1 className="text-3xl font-bold mb-2">Created Playlists</h1>
                <hr />
                <div className="mt-10 flex flex-wrap justify-between">
                    {
                        videos.map(i => <PlayListCard {...i} />)
                    }
                </div>
            </div>
        </div>
    );
}