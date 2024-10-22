import React from "react";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";
export default function SignInMessageCard() {
    const navigate = useNavigate();
    return (
        <div style={{ borderRadius: "inherit" }} className="bg-[#000000b7] absolute top-0 left-0 flex items-center justify-center h-full w-full">
            <div className="bg-[#000000b7] w-72 h-48 flex flex-col items-center justify-center rounded-xl gap-2 border border-white">
                <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold">Not signed in yet?</span>
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