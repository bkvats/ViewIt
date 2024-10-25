import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import SignInMessageCard from "./SignInMessageCard";
import CenterBox from "./CenterBox";
export default function AuthLayout() {
    const { loading, isLoggedIn } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);
    if (loading) return <></>;
    return (
        isLoggedIn ? <Outlet /> :
            <CenterBox isVisible={isVisible} parentDesign={"flex flex-col justify-center items-center"} closeEventHandler={() => {
                setIsVisible(false);
                navigate(-1);
            }}>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold">Not signed in yet?</span>
                    <span className="text-lg font-light">Sign in to use this service.</span>
                </div>
                <div>
                    <SecondaryButton eventHandler={() => {
                        setIsVisible(false);
                        navigate(-1);
                    }} title={"Cancel"} />
                    <PrimaryButton eventHandler={() => {
                        setIsVisible(false);
                        navigate("/sign-in");
                    }} title={"Sign in"} />
                </div>
            </CenterBox>
    );
}