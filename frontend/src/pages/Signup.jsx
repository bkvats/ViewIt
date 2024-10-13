import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryButton from "../components/PrimaryButton";
import ErrorComp from "../components/ErrorComp";
import axios from "axios";
export default function SignUp() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dataOrder, setDataOrder] = useState(0);
    const [error, setError] = useState("");
    const dataFlow = [
        {
            title: "Enter you email",
            inputFields: [
                {
                    type: "email",
                    name: "email",
                    placeholder: "ram@example.com",
                    value: email,
                    setValue: setEmail
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: async () => {
                    setError("");
                    const emailRegex = /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,253}\.[a-zA-Z]{2,}$/;
                    if (!email) setError("Email is required!");
                    else if (emailRegex.test(email)) {
                        const {data} = await axios.get("/api/v1/users/is-email-available", {
                            params: {
                                email
                            }
                        });
                        if (data.data) setDataOrder(dataOrder + 1);
                        else setError("User already exists");
                    }
                    else setError("Enter a valid email address!");
                }
            }
        },
        {
            title: "Enter your name",
            inputFields: [
                {
                    type: "text",
                    name: "firstName",
                    placeholder: "First Name",
                    value: firstName,
                    setValue: setFirstName
                },
                {
                    type: "text",
                    name: "lastName",
                    placeholder: "Last name (optional)",
                    value: lastName,
                    setValue: setLastName
                }
            ],
            submissionHandler: () => {
                const NameRegex = /^[A-Za-zÀ-ÿ]+([-'\s][A-Za-zÀ-ÿ]+)*$/;
                if (!firstName) setError("First name is required!");
                else if (NameRegex.test(firstName)) { }
                else setError("First name is invalid!");
            }
        }
    ];
    // let dataOrder = 0;
    return (
        <div className="bg-[url(src/pages/images/signup-bg.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center lg:items-center">
            <div className="w-full mx-2 lg:w-3/4 h-96 lg:h-72 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row justify-between rounded-2xl mt-12 lg:mt-0">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Create an Account</h1>
                    <p>{dataFlow[dataOrder].title}</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    {
                        dataFlow[dataOrder].inputFields.map((i) => (
                            <BasicInput key={i.name} {...i} setError = {setError} />
                        ))
                    }
                    {error && <ErrorComp message = {error}/>}
                    <PrimaryButton {...dataFlow[dataOrder].buttonReq} />
                </div>
            </div>
        </div>
    )
}