import React, { useState } from "react";
import BasicInput from "../components/BasicInput";
import PrimaryButton from "../components/PrimaryButton";
import ErrorComp from "../components/ErrorComp";
import axios from "axios";
import Loader from "../components/Loader";
import UploadAvatar from "../components/UploadAvatar";
import SecondaryButton from "../components/SecondaryButton";
export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/duhmeadz6/image/upload/v1728580223/user-default-avatar_bvvdhh.png");
    const [avatarFile, setAvatarFile] = useState(null);
    const [dataOrder, setDataOrder] = useState(4);
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
                    name: "firstname",
                    placeholder: "First Name",
                    value: firstname,
                    setValue: setFirstname
                },
                {
                    type: "text",
                    name: "lastname",
                    placeholder: "Last name (optional)",
                    value: lastname,
                    setValue: setLastname
                }
            ],
            buttonReq: {
                title: "Next",
                eventHandler: () => {
                    setLoading(true);
                    const NameRegex = /^[A-Za-zÀ-ÿ]+([-'\s][A-Za-zÀ-ÿ]+)*$/;
                    if (!firstname) setError("First name is required!");
                    else if (NameRegex.test(firstname)) {
                        if (lastname && !NameRegex.test(lastname)) setError("Invalid last name!");
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
        {
            title: "Upload an avatar or continue with the default one",
            uploadFields: {
                name: "",
                setValue: null,
                setError,
                imageUrl,
                setImageUrl,
                setAvatarFile
            },
            buttonReq: {
                title: "Next",
                eventHandler: async () => {
                    setLoading(true);
                    setLoadingMessage("Saving Info...");
                    try {
                        const result = await axios.post("/api/v1/users/register-user", {
                            firstname,
                            lastname,
                            email,
                            username,
                            password,
                            avatarFile
                        });
                        console.log(result);
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                }
            }
        }
    ];
    return (
        <div className="bg-[url(src/pages/images/signup-bg.jpg)] w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
            <div className={`relative w-full min-h-72 mx-2 lg:w-3/4 bg-[#1F1D2B] p-8 flex flex-col lg:flex-row rounded-2xl`}>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <img src="https://res.cloudinary.com/duhmeadz6/image/upload/v1728321572/logo_fwrgzv.svg" alt="logo" width={50} />
                    <h1 className="text-4xl font-bold">Create an Account</h1>
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
                    <SecondaryButton title={"Back"} className={"mx-4"} eventHandler={() => {setDataOrder(dataOrder > 0 ? dataOrder - 1 : 0)}}/>
                    <PrimaryButton {...dataFlow[dataOrder].buttonReq}/>
                    </div>
                </div>
                {loading && <Loader message={loadingMessage}/>}
            </div>
        </div>
    );
}