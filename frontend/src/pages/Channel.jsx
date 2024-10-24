import React, { useState } from "react";
import { useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CenterBox from "../components/CenterBox";
import { MdOutlineDeleteSweep, MdDriveFolderUpload } from "react-icons/md";
import UploadAvatar from "../components/UploadAvatar";
export default function Channel() {
    const { userData } = useSelector(state => state.auth);
    const [showImageUpload, setShowImageUpload] = useState(false);
    return (
        <>
            <div className="relative">
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1729537747/istockphoto-1422735620-612x612_zr06bg.jpg" alt="cover-image" className="mx-auto my-4 w-full h-36 md:h-48 object-cover object-center rounded-lg" />
                <button className="bg-[#000000b0] p-3 rounded-full absolute top-0 right-0 m-2 hover:bg-black" onClick={() => {
                    setShowImageUpload(true);
                }}>
                    <img src="src/components/images/edit-icon.svg" alt="" />
                </button>
            </div>
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
                    <NavLink to={`/@${userData.username}`} className={({ isActive }) => `${(isActive && window.location.pathname == `/@${userData.username}`) && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Home</NavLink>
                    <NavLink to={`/@${userData.username}/videos`} className={({ isActive }) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Videos</NavLink>
                    <NavLink to={`/@${userData.username}/playlists`} className={({ isActive }) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Playlists</NavLink>
                </div>
                <Outlet />
            </div>
            {showImageUpload && <CenterBox closeEventHandler={() => {
                setShowImageUpload(false);
            }} parentDesign={"flex justify-center items-center"}>
                <div className="space-x-8">
                    {userData.coverImage && <PrimaryButton title={<MdOutlineDeleteSweep size={"3rem"}/>} className={"bg-red-400 !font-normal text-white !mt-0 !text-2xl"}/>}
                    <PrimaryButton title={<MdDriveFolderUpload size={"3rem"}/>} className={"bg-green-600 !mt-0 !font-normal text-white !text-2xl"}/>
                </div>
            </CenterBox>}
        </>
    )
}