import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader";
import { login, setLoading } from "./store/authSlice";
import axios from "axios";
import PlayListCard from "./components/PlayListCard";
import CenterBox from "./components/CenterBox";
export default function App() {
  const { isLoggedIn, userData } = useSelector(state => state.auth);
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
        <div className="px-4 w-full lg:w-5/6">
        <Outlet />
        </div>
      </main>
    </>
  );
}