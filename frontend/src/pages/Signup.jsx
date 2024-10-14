import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryButton from "../components/PrimaryButton";
import ErrorComp from "../components/ErrorComp";
import axios from "axios";
import Loader from "../components/Loader";
export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
                        setLoading(true);
                        try {
                            const { data } = await axios.get("/api/v1/users/is-email-available", {
                                params: {
                                    email
                                }
                            });
                            if (data.data) setDataOrder(dataOrder + 1);
                            else setError("User already exists");
                        }
                        catch (error) {
                            console.log(error.message);
                            setError("Something went wrong! Please try again...");
                        }
                        setLoading(false);
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
            buttonReq: {
                title: "Next",
                eventHandler: () => {
                    setLoading(true);
                    const NameRegex = /^[A-Za-zÀ-ÿ]+([-'\s][A-Za-zÀ-ÿ]+)*$/;
                    if (!firstName) setError("First name is required!");
                    else if (NameRegex.test(firstName)) {
                        if (lastName && !NameRegex.test(lastName)) setError("Invalid last name!");
                        else setDataOrder(dataOrder + 1);
                    }
                    else setError("Invalid first name!");
                    setLoading(false);
                }
            }
        },
        {
            title: "Enter username",
            inputFields: [
                {
                    type: "text",
                    name: "username",
                    placeholder: "Enter a username",
                    value: username,
                    setValue: setUsername
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: async () => {
                    const usernameRegex = /^(?!.*[-_]{2})(?![-_])[a-zA-Z0-9-_]{3,20}(?<![-_])$/;
                    if (!username) setError("Username is required!");
                    else if (usernameRegex.test(username)) {
                        setLoading(true);
                        try {
                            const { data } = await axios.get("/api/v1/users/is-username-available", {
                                params: {
                                    username
                                }
                            });
                            if (data.data) setDataOrder(dataOrder + 1);
                            else setError("Username already taken! Try another...");
                        }
                        catch (error) {
                            console.log(error.message);
                            setError("Something went wrong! Please try again...");
                        }
                    }
                    else setError("Invalid username!");
                    setLoading(false);
                }
            }
        },
        {
            title: "Enter a password",
            inputFields: [
                {
                    type: "password",
                    name: "password",
                    placeholder: "Enter password",
                    value: password,
                    setValue: setPassword
                },
                {
                    type: "password",
                    name: "confirmPassword",
                    placeholder: "Re-enter password",
                    value: confirmPassword,
                    setValue: setConfirmPassword
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: () => {
                    setLoading(true);
                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?~`-])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?~`-]{8,20}$/;
                    if (!password) setError("Password is required!");
                    else if (!confirmPassword) setError("Kindly re-enter the password");
                    else if (!passwordRegex.test(password)) setError("Password must be 8-20 characters, with at least one uppercase letter, one lowercase letter, one digit, and one special character.");
                    else if (password !== confirmPassword) setError("Passwords does'nt match!");
                    else setDataOrder(dataOrder + 1);
                    setLoading(false);
                }
            }
        },
    ];
    return (
        <div className="bg-[url(src/pages/images/signup-bg.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center lg:items-center">
            <div className={`relative w-full mx-2 lg:w-3/4 h-96 lg:h-72 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row justify-between rounded-2xl mt-12 lg:mt-0`}>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Create an Account</h1>
                    <p>{dataFlow[dataOrder].title}</p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    {
                        dataFlow[dataOrder].inputFields.map((i) => (
                            <BasicInput key={i.name} {...i} setError={setError} />
                        ))
                    }
                    {error && <ErrorComp message={error} />}
                    <PrimaryButton {...dataFlow[dataOrder].buttonReq} />
                </div>
                {loading && <Loader />}
            </div>
        </div>
    )
}