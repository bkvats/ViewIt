import React, { useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { login, setLoading } from "./store/authSlice";
import axios from "axios";
export default function App() {
  const { isLoggedIn } = useSelector(state => state.auth);
  const authLoading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (!authLoading) {
        dispatch(setLoading(true));
        if (!isLoggedIn) {
          console.log("marging api call");
          try {
            const respone = await axios.get("/api/v1/users/get-current-user");
            if (respone.status == 200) {
              dispatch(login(respone.data.data));
            }
          }
          catch (error) {
            // console.log(error);
          }
        }
        dispatch(setLoading(false));
      }
    })();
  }, [dispatch]);
  if (authLoading) return <Loader />;
  return (
    <>
      <Header />
      <main className="w-full flex gap-2">
        <Sidebar />
        <div className="px-4 w-full lg:w-5/6 h-full">
        <Outlet />
        </div>
      </main>
    </>
  );
}