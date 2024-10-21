import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
export default function SignInMessageCard() {
    const navigate = useNavigate();
    return (
        <div style={{ borderRadius: "inherit" }} className="bg-[#a6000049] absolute top-0 left-0 flex flex-col gap-1 items-center justify-center h-full w-full">
            <div className="bg-[#000000b7] z-50 flex flex-col py-4 px-8 rounded-lg">
                <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold">Not signed in yet?</span>
                    <span className="text-lg font-light">Sign in to use this service.</span>
                </div>
                <div>
                    <SecondaryButton eventHandler={() => {
                        navigate(-1);
                    }} title={"Cancel"} />
                    <PrimaryButton eventHandler={() => {
                        navigate("/sign-in");
                    }} title={"Sign in"} />
                </div>
            </div>
        </div>
    );
}