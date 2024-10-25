import React, { useEffect, useRef, useState } from "react";
import { setLoading } from "../store/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CenterBox from "../components/CenterBox";
import { MdOutlineDeleteSweep, MdDriveFolderUpload } from "react-icons/md";
import { FaRegEdit, FaWindows } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import ErrorComp from "../components/ErrorComp";
import BasicInput from "../components/BasicInput";
import axios from "axios";
export default function Channel() {
    const { userData, loading } = useSelector(state => state.auth);
    const [showEditButtons, setShowEditButtons] = useState(false);
    const {username} = useParams();
    const route = "/channel" + (username ? "/" + username : "");
    const [showImageUpload, setShowImageUpload] = useState(false);
    const [showNameEdit, setShowNameEdit] = useState(false);
    const [error, setError] = useState("");
    const [imageUpdateType, setImageUpdateType] = useState(-1);
    const [firstname, setFirstname] = useState(userData.firstname);
    const [lastname, setLastname] = useState(userData.lastname);
    const [channelData, setChannelData] = useState(null);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const editName = {
        title: "Enter your name",
        inputFields: [
            {
                type: "text",
                name: "firstname",
                placeholder: "First Name",
                value: firstname,
                setValue: setFirstname
            },
            {
                type: "text",
                name: "lastname",
                placeholder: "Last name (optional)",
                value: lastname,
                setValue: setLastname
            }
        ],
        buttonReq: {
            title: <IoMdDoneAll size={"2rem"} />,
            eventHandler: async () => {
                dispatch(setLoading(true));
                setFirstname(firstname.trim());
                setLastname(lastname.trim());
                const NameRegex = /^[A-Za-zÀ-ÿ]+([-'\s][A-Za-zÀ-ÿ]+)*$/;
                if (!firstname) setError("First name is required!");
                else if (NameRegex.test(firstname)) {
                    if (lastname && !NameRegex.test(lastname)) setError("Invalid last name!");
                    else {
                        const response = await axios.patch("/api/v1/users/update-name", {
                            firstname,
                            lastname,
                        });
                        if (response.status == 200) window.location.reload();
                        else setError(response.data.message);
                    }
                }
                else setError("Invalid first name!");
                dispatch(setLoading(false));
            }
        }
    };
    useEffect(() => {
        let requiredUsername = "";
        if (username) requiredUsername = username;
        else {
            requiredUsername = userData.username;
            setShowEditButtons(true);
        }
        axios(`/api/v1/users/get-channel/${requiredUsername}`).then()
    }, [userData]);
    return (
        <>
            <div className="relative">
                <img src={userData.coverImage ? userData.coverImage : "https://res.cloudinary.com/duhmeadz6/image/upload/v1729537747/istockphoto-1422735620-612x612_zr06bg.jpg"} alt="cover-image" className="mx-auto my-4 w-full h-36 md:h-48 object-cover object-center rounded-lg" />
                {showEditButtons && <button className="bg-[#000000b0] p-3 rounded-full absolute top-0 right-0 m-2 hover:bg-black" onClick={() => {
                    setShowImageUpload(true);
                    setImageUpdateType(0);
                }}>
                    <img src="src/components/images/edit-icon.svg" alt="" />
                </button>}
            </div>
            <hr />
            <div className="my-4 flex flex-col justify-center lg:items-center lg:flex-row gap-2">
                <div className="relative flex justify-center self-start lg:self-auto">
                    <img src={userData.avatar} alt="avatar" className="w-32 h-32 md:min-w-48 md:min-h-48 rounded-full border-2 border-white object-cover object-center" />
                    {showEditButtons && <button className="bg-[#000000b0] p-2 lg:p-3 rounded-full bottom-1 absolute hover:bg-black" onClick={() => {
                        setShowImageUpload(true);
                        setImageUpdateType(1);
                    }}>
                        <img src="src/components/images/edit-icon.svg" alt="" />
                    </button>}
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <h1 className="font-extrabold text-4xl lg:text-6xl">
                            {userData.firstname} {userData.lastname}
                        </h1>
                        {showEditButtons && <button className="p-2 lg:p-3 rounded-full hover:bg-black" onClick={() => {
                            setShowNameEdit(true);
                        }}>
                            <FaRegEdit size={"25px"} />
                        </button>}
                    </div>
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
                    <NavLink to={`${route}`} className={({ isActive }) => `${(isActive && window.location.pathname == `${route}`) && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Home</NavLink>
                    <NavLink to={`${route}/videos`} className={({ isActive }) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Videos</NavLink>
                    <NavLink to={`${route}/playlists`} className={({ isActive }) => `${isActive && "font-bold border-b-2 border-white bg-[#00000076]"}  py-1 px-4 transition-colors duration-200`}>Playlists</NavLink>
                </div>
                <Outlet context={{temp: "temp value"}} />
            </div>
            <CenterBox isVisible={showImageUpload} closeEventHandler={() => {
                setShowImageUpload(false);
            }} parentDesign={"flex justify-center items-center"} loading = {loading}>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="space-x-8">
                        {<PrimaryButton title={<MdOutlineDeleteSweep size={"3rem"} />} className={"bg-red-400 !font-normal text-white !mt-0 !text-2xl"} eventHandler={async () => {
                            dispatch(setLoading(true));
                            const response = await axios.patch(`/api/v1/users/${imageUpdateType ? "remove-avatar" : "remove-cover"}`);
                            if (response.status == 200) window.location.reload();
                            else setError(response.data.message);
                            dispatch(setLoading(false));
                        }}/>}
                        <PrimaryButton title={<MdDriveFolderUpload size={"3rem"} />} className={"bg-green-600 !mt-0 !font-normal text-white !text-2xl"} eventHandler={() => {
                            inputRef.current.click();
                        }} />
                    </div>
                    <ErrorComp message={error} />
                    <input ref={inputRef} type="file" name="" onChange={async (event) => {
                        setError("");
                        const file = event.target.files[0];
                        if (!["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(file.type)) {
                            setError("Invalid file type. Please upload jpg/png/webp image only!");
                            return;
                        }
                        if (file.size > (10 * 1024 * 1024)) {
                            setError("Image size should be less then 10 MB");
                            return;
                        }
                        dispatch(setLoading(true));
                        const response = await axios.patch(`/api/v1/users/${imageUpdateType ? "update-avatar" : "update-cover"}`, {
                            imageFile: file
                        }, {
                            headers: { "Content-Type": "multipart/form-data" }
                        });
                        if (response.status == 200) {
                            window.location.reload();
                        }
                        else setError(response.data.message);
                        dispatch(setLoading(false));
                    }} hidden />
                </div>
            </CenterBox>
            <CenterBox isVisible={showNameEdit} closeEventHandler={() => {
                setShowNameEdit(false);
            }} parentDesign={"w-1/2"} loading={loading}>
                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="w-1/2 space-y-4">
                        {
                            editName.inputFields.map((i) => (
                                <BasicInput key={i.name} {...i} setError={setError} className={"border-2 border-black"} />
                            ))
                        }
                    </div>
                    <ErrorComp message={error} />
                    <PrimaryButton {...editName.buttonReq} className={"bg-red-400 text-white font-normal"} />
                </div>
            </CenterBox>
        </>
    )
}