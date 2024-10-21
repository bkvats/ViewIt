import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInMessageCard from "./SignInMessageCard";
export default function AuthLayout() {
    const {loading, isLoggedIn} = useSelector(state => state.auth);
    if (loading) return <></>;
    return (
        isLoggedIn ? <Outlet /> : <SignInMessageCard />
    );
}