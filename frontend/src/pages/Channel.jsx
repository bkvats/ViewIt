import React from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import { NavLink, Outlet } from "react-router-dom";
export default function Channel() {
    const { userData } = useSelector(state => state.auth);
    return (
        <>
            <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729537747/istockphoto-1422735620-612x612_zr06bg.jpg" alt="cover-image" className="mx-auto my-4 w-full h-36 md:h-48 object-cover object-center rounded-lg" />
            <hr />
            <div className="my-4 flex flex-col justify-center lg:items-center lg:flex-row gap-2">
                <img src={userData.avatar} alt="avatar" className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white" />
                <div>
                    <h1 className="font-extrabold text-4xl lg:text-6xl">{userData.firstname} {userData.lastname}</h1>
                    <div className="flex gap-4 items-center">
                        <span className="text-xl mt-4">@{userData.username}</span>
                        <PrimaryButton title={"Subscribe"} className={"bg-white text-black font-semibold rounded-3xl"} />
                    </div>
                    <div className="flex gap-2 text-xl my-2 font-semibold">
                        <span className="text-2xl">100M <span className="font-light">subscribers</span></span>
                        <span className="text-2xl">|</span>
                        <span className="text-2xl">1k <span className="font-light">videos</span></span>
                    </div>
                    <div className="text-lg line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, mollitia cupiditate? Laborum neque tenetur hic, eveniet perspiciatis nesciunt, veritatis fugiat excepturi assumenda maiores odio vel aperiam suscipit quisquam sapiente vero eligendi unde ipsa illum dicta? Nesciunt, repellendus autem ex molestias delectus facilis hic et, beatae tempore libero aliquid error! Vero dolorem animi, eos perspiciatis repellendus pariatur necessitatibus corrupti rem velit, iste laboriosam? Animi consequuntur dolor officiis tenetur doloribus sunt nostrum sit tempore, rem reprehenderit molestias esse ab vel excepturi necessitatibus blanditiis obcaecati voluptatem. Nam totam tenetur aperiam dolorum enim iste aut nostrum delectus incidunt in libero laudantium, deleniti quod excepturi.</div>
                </div>
            </div>
            <hr />
            <div>
                <div className="px-4 mt-4 text-2xl space-x-6">
                    <NavLink to = "/channel" className={({isActive}) => `${(isActive && window.location.pathname == "/channel") && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4`}>Home</NavLink>
                    <NavLink to = "/channel/videos" className={({isActive}) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4`}>Videos</NavLink>
                    <NavLink to = "/channel/playlists" className={({isActive}) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4`}>Playlists</NavLink>
                </div>
                <Outlet />
            </div>
        </>
    )
}