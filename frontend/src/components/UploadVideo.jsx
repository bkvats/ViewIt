import React, { useRef, useState } from "react";
import { setLoading } from "../store/loadingSlice";
import CenterBox from "./CenterBox";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import { MdOutlineDeleteSweep, MdDriveFolderUpload } from "react-icons/md";
import ErrorComp from "../components/ErrorComp";
import { useNavigate } from "react-router-dom";
export default function UploadVideo() {
    const { loading } = useSelector(state => state.loading);
    const [error, setError] = useState("");
    const [uploadProgress, setUploadProgess] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    return (
        <CenterBox isVisible={true} loading={loading} closeEventHandler={() => {
            navigate("/channel");
        }}>
            <div className="flex justify-center my-16">
                <PrimaryButton title={<MdDriveFolderUpload size={"3rem"} />} className={"bg-green-600 !mt-0 !font-normal text-white !text-2xl"} eventHandler={() => {
                    inputRef.current.click();
                }} />
                <ErrorComp message={error} />
                <input ref={inputRef} type="file" name="" onChange={async (event) => {
                    setError("");
                    const file = event.target.files[0];
                    // if (!["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(file.type)) {
                    //     setError("Invalid file type. Please upload jpg/png/webp image only!");
                    //     return;
                    // }
                    // if (file.size > (10 * 1024 * 1024)) {
                    //     setError("Image size should be less then 10 MB");
                    //     return;
                    // }
                    dispatch(setLoading(true));
                    const response = await axios.patch(`/api/v1/users/${imageUpdateType ? "update-avatar" : "update-cover"}`, {
                        imageFile: file
                    }, {
                        headers: { "Content-Type": "multipart/form-data" }
                    });
                    if (response.status == 200) {
                        window.location.reload();
                    }
                    else setError(response.data.message);
                    dispatch(setLoading(false));
                }} hidden />
            </div>
        </CenterBox>
    );
}