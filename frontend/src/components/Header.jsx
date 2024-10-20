import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, setLoading } from "../store/authSlice";
export default function Header() {
    const [search, setSearch] = useState("");
    const [userOptionsVisible, setUserOptionsVisible] = useState(false);
    const { isLoggedIn, userData } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const userOptions = [
        {
            name: "History",
            imgUrl: "src/components/images/Header/history-icon.svg"
        },
        {
            name: "Your Channel",
            imgUrl: "src/components/images/Header/channel-icon.svg"
        }
    ];
    return (
        <header className="flex justify-between items-center mb-2 md:px-14 px-2 py-3">
            <div className="flex justify-between items-center md:w-1/2">
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                <div className={`flex w-3/4 bg-[#808191] justify-between items-center rounded-lg`}>
                    <input value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} className={`w-full bg-[#808191] outline-none rounded-md px-4 py-2`} type="search" name="" id="" placeholder="Search" />
                    <button className="px-4"><img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/search_rir2iz.svg" alt="search" width={20} /></button>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-6">
                {isLoggedIn ? <div className="flex flex-col items-end md:items-center">
                    <img src={userData.avatar} alt="avatar" className={`rounded-full w-9 h-9 cursor-pointer ${userOptionsVisible && "p-[2px] border-[1px] border-white"}`} onClick={() => {
                        setUserOptionsVisible(!userOptionsVisible);
                    }} />
                    {userOptionsVisible &&
                        <div className="absolute top-14 border-[1px] border-white rounded-lg overflow-auto">
                            <img src={userData.avatar} alt="" className="w-52 h-52 rounded-lg object-cover object-center"/>
                            <ul className="absolute top-0 w-full h-full bg-[#000000ac] py-1 px-2 text-lg">
                                {
                                    userOptions.map((i) => (
                                        <li key={i.name} className="hover:underline my-2">
                                            <Link to={i.to} className="flex space-x-2">
                                                <img src={i.imgUrl} alt="" width={20} />
                                                <span>{i.name}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                                <hr />
                                <li className="flex space-x-2 my-2 hover:underline cursor-pointer" onClick={async () => {
                                    dispatch(setLoading(true));
                                    const response = await axios.post("/api/v1/users/logout");
                                    if (response.status == 200) {
                                        dispatch(logout());
                                    }
                                    dispatch(setLoading(false));
                                }}>
                                    <img src="src/components/images/Header/logout-icon.svg" alt="" width={20} />
                                    <span>Log out</span>
                                </li>
                            </ul>
                        </div>}
                </div> :
                    <div className="flex space-x-2 items-center">
                        <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728580223/user-default-avatar_bvvdhh.png" alt="avatar" className="rounded-full w-7 h-7 cursor-pointer" />
                        <Link className="text-sm md:text-lg hover:underline" to={"/sign-in"}>Sign in</Link>
                    </div>}
                <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/bell-icon_daxgfh.svg" className="hidden md:block cursor-pointer" alt="" width={25} />
            </div>
        </header>
    );
}