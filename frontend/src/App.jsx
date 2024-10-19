import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Link from "./components/Link";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
export default function App() {
  return (
    <>
      <Header />
      <main className="w-screen flex">
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}