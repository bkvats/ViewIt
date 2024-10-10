import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Link from "./components/Link";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}