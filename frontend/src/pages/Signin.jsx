import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-[url(https://static.vecteezy.com/system/resources/previews/024/448/956/large_2x/space-wallpaper-banner-background-stunning-view-of-a-cosmic-galaxy-with-planets-and-space-objects-elements-of-this-image-furnished-by-nasa-generate-ai-free-photo.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center lg:items-center">
            <div className="w-full mx-2 lg:w-3/4 h-72 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row justify-between rounded-2xl mt-12 lg:mt-0">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Sign in</h1>
                    <p>to continue to ViewIt</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    <BasicInput type={"text"} placeholder={"Email"} value={email} setValue={setEmail} />
                    <div className="mt-4 self-end">
                        <SecondaryButton title={"Create account"} eventHandler={() => {
                            navigate("/sign-up");
                        }}/>
                        <PrimaryButton title={"Next"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}