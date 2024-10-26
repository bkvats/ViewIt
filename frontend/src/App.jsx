import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { login, setAuthLoading } from "./store/authSlice";
import axios from "axios";
export default function App() {
  const { isLoggedIn, authLoading } = useSelector(state => state.auth);
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (!authLoading) {
        dispatch(setAuthLoading(true));
        if (!isLoggedIn) {
          console.log("marging api call");
          try {
            const respone = await axios.get("/api/v1/users/get-current-user");
            if (respone.status == 200) {
              dispatch(login(respone.data.data));
            }
          }
          catch (error) {
            console.log(error);
          }
        }
        dispatch(setAuthLoading(false));
      }
    })();
  }, [dispatch]);
  return (
    authLoading ? <Loader /> : <>
      <Header />
      <main className=" w-full flex gap-2">
        <Sidebar />
        <div className="lg:absolute right-0 top-14 bg-[#1F1D2B] px-4 w-full lg:w-5/6">
          <Outlet />
        </div>
      </main>
      {loading && <Loader />}
    </>
  );
}