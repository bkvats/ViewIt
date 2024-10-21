import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInMessageCard from "./SignInMessageCard";
export default function AuthLayout() {
    const {isLoggedIn} = useSelector(state => state.auth);
    return (
        isLoggedIn ? <Outlet /> : <SignInMessageCard />
    );
}