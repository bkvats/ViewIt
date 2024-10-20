import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Loader from "../components/Loader";
import ErrorComp from "../components/ErrorComp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");
    const [dataOrder, setDataOrder] = useState(0);
    const navigate = useNavigate();
    const dataFlow = [
        {
            title: "User your VT account",
            inputFields: [
                {
                    type: "text",
                    name: "identifier",
                    placeholder: "Enter username or email",
                    value: identifier,
                    setValue: setIdentifier
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: async () => {
                    setIdentifier(identifier.trim());
                    if (!identifier) setError("Enter either email or username");
                    else {
                        setLoading(true);
                        try {
                            let response = await axios.get("/api/v1/users/is-email-available", {
                                params: {
                                    email: identifier
                                }
                            });
                            const email = response.data;
                            response = await axios.get("/api/v1/users/is-username-available", {
                                params: {
                                    username: identifier
                                }
                            })
                            const username = response.data;
                            if (!email.data || !username.data) setDataOrder(dataOrder + 1);
                            else setError("Could'nt find you vt account");
                        }
                        catch (error) {
                            console.log(error.message);
                            setError("Something went wrong! Please try again...");
                        }
                        setLoading(false);
                    }
                }
            }
        },
        {
            title: `Welcome ${identifier}`,
            inputFields: [
                {
                    type: "password",
                    name: "password",
                    placeholder: "Enter your password",
                    value: password,
                    setValue: setPassword
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: async () => {
                    setLoading(true);
                    setLoadingMessage("Verifying...");
                    try {
                        const {data} = await axios.post("api/v1/users/login", {identifier, password});
                        if (data.data) navigate("/");
                    }
                    catch (error) {
                        setError(error.response.data.message);
                    }
                    setLoading(false);
                    setLoadingMessage("");
                }
            }
        }
    ]
    return (
        <div className="lg:bg-[url(https://static.vecteezy.com/system/resources/previews/024/448/956/large_2x/space-wallpaper-banner-background-stunning-view-of-a-cosmic-galaxy-with-planets-and-space-objects-elements-of-this-image-furnished-by-nasa-generate-ai-free-photo.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
            <div className={`relative w-full min-h-screen lg:min-h-72 lg:mx-2 lg:w-3/4 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row lg:rounded-2xl`}>
            <button className="absolute top-0 right-0 m-2 text-lg cursor-pointer p-1 rounded-full hover:bg-[#ffffff58]" onClick={() => {
                navigate(-1);
            }}>❌</button>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Sign in</h1>
                    <p className="text-lg">{dataFlow[dataOrder].title}</p>
                </div>
                <div className="w-full lg:w-1/2 lg:mt-4 flex flex-col justify-around gap-2">
                    {
                        dataFlow[dataOrder].inputFields ? dataFlow[dataOrder].inputFields.map((i) => (
                            <BasicInput key={i.name} {...i} setError={setError} />
                        )) : <UploadAvatar {...dataFlow[dataOrder].uploadFields}/>
                    }
                    {error && <ErrorComp message={error} />}
                    <div className="self-end mt-4">
                    <SecondaryButton title={"Back"} className={"mx-4"} eventHandler={() => {
                        if (dataOrder == 0) navigate(-1);
                        setDataOrder(dataOrder - 1);
                    }}/>
                    <PrimaryButton {...dataFlow[dataOrder].buttonReq}/>
                    </div>
                </div>
                {loading && <Loader message={loadingMessage}/>}
            </div>
        </div>
    )
}