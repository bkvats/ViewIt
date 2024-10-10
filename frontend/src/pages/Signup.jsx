import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryNavigateButton from "../components/PrimaryNavigateButton";
export default function Signin() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div className="bg-[url(src/pages/images/signup-bg.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center lg:items-center">
            <div className="w-full mx-2 lg:w-3/4 h-96 lg:h-72 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row justify-between rounded-2xl mt-12 lg:mt-0">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Create an Account</h1>
                    <p>Enter your name</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    <BasicInput type={"text"} title={"First name"} value={firstName} setValue={setFirstName} className={"my-2"} />
                    <BasicInput type={"text"} title={"Last name (optional)"} value={lastName} setValue={setLastName} className={"my-2"} />
                    <PrimaryNavigateButton title={"Next"} className={"self-end mt-2"} />
                </div>
            </div>
        </div>
    )
}