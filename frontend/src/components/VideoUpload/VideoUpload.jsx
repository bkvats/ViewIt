import React, { useEffect, useRef, useState } from "react";
import CenterBox from "../CenterBox";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import SelectFile from "./SelectFile";
import PrimaryButton from "../PrimaryButton";
export default function VideoUpload() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const parentRef = useRef(null);
    const [languages, setLanguages] = useState([
        {
            lang: "Not Available",
            file: null,
            url: ""
        }
    ]);
    useEffect(() => {
        if (parentRef.current) {
            parentRef.current.scroll = parentRef.current.scrollHeight;
        }
    }, [languages]);
    return (
        <CenterBox isVisible={true} closeEventHandler={() => {
            document.body.style.overflow = "auto";
            navigate("/channel");
        }} parentDesign={"w-[95%] lg:w-[75%] !py-2 max-h-96 !px-6 overflow-y-auto"} parentRef={parentRef}>
            <div className="flex justify-evenly items-center">
                <p className={`bg-black ${step == 1 ? "text-white border-gray-500" : "bg-opacity-40"} rounded-full px-3  border-2`}>1</p>
                <p className={`bg-black ${step == 2 ? "text-white" : "bg-opacity-40"} rounded-full px-3`}>2</p>
            </div>
            {
                step == 1 &&
                <div className="my-2 flex flex-col">
                    <h1 className="text-4xl font-semibold">Video Files</h1>
                    <hr className="border-[1px] my-2 w-52 border-black border-opacity-50" />
                    <p className="text-md font-normal opacity-70 mb-4">Select Video Files to get started. <span className="text-base">(You can select various files based on the languages, click on the add button to add more files.)</span></p>
                    {
                        languages.map((i, index) => (
                            <SelectFile key={i.lang} languages={languages} setLanguages={setLanguages} index={index} />
                        ))
                    }
                    <button className="p-1 hover:bg-black hover:bg-opacity-20 rounded-full w-fit" onClick={() => {
                        if (!languages.at(-1).file) return;
                        languages.push({
                            lang: "Select a language",
                            file: null,
                            url: ""
                        });
                        setLanguages([...languages]);
                    }}><IoAdd color="rgb(30,58,138)" /></button>
                    {languages[0].file && <PrimaryButton title={"Next"} className={"bg-black text-white self-end"} eventHandler={() => {
                        setStep(step + 1);
                    }}/>}
                </div>
            }
            {
                step == 2 &&
                <div>
                    {
                        languages.map((i) => (
                            <p>{i.file ? "Contains file" : "Not contain any file"}</p>
                        ))
                    }
                </div>
            }
        </CenterBox>
    );
}