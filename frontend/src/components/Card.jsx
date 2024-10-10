import React from "react";

export default function Card() {
    return (
        <div className="border-red-600 max-w-full md:max-w-[22rem] rounded-2xl bg-[#ffffff18] pb-1 m-4">
            <div className="relative">
                <img className="rounded-t-2xl min-w-full h-60 object-cover object-center" src="src/components/images/thumbnail.jpg" alt="thumbnail"/>
                <span className="absolute bg-gray-600 font-bold top-0 right-0 m-2 py-0 px-2 rounded-lg text-md">7:00</span>
            </div>
            <div className="my-3 mx-5 border-green-700 ">
                <div className="border-yellow-700  relative flex items-start">
                    <span className="max-w-[80%] text-xl text-[#ffffffcd] text-nowrap text-ellipsis overflow-hidden">Channel Name</span>
                    <div className="absolute bottom-0 right-0 border-[2px] border-white p-[6px] rounded-full">
                        <img className="rounded-full" src="src/components/images/user.jpg" alt="" width={60}/>
                    </div>
                </div>
                <div className="my-4 mr-12">
                    <h2 className="line-clamp-2 text-2xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aliquid ipsum ipsam nemo, possimus cupiditate doloribus totam, porro ipsa aut quos beatae! Accusamus dicta distinctio magnam ea fuga ullam. Similique est velit laboriosam fugit soluta! Perspiciatis beatae iste obcaecati libero sit odio neque nostrum eaque rem error quas ipsam odit similique vitae enim</h2>
                    <div className="my-4 text-gray-300 font-black">
                        <span className="mr-4">88K views</span>
                        <span>2 years ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}