import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryNavigateButton from "../components/PrimaryNavigateButton";
import SecondaryNavigateButton from "../components/SecondaryNavigateButton";
export default function Signin() {
    const [email, setEmail] = useState("");
    return (
        <div className="bg-[url(src/pages/images/signup-bg.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center lg:items-center">
            <div className="w-full mx-2 lg:w-3/4 h-72 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row justify-between rounded-2xl mt-12 lg:mt-0">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Sign in</h1>
                    <p>to continue to ViewIt</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    <BasicInput type={"text"} title={"Email"} value={email} setValue={setEmail} />
                    <div className="mt-4 self-end">
                        <SecondaryNavigateButton title={"Create account"}/>
                        <PrimaryNavigateButton title={"Next"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}