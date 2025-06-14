import { Link, useNavigate } from "react-router-dom"
import { Input } from "../components/Input"
import { Quote } from "../components/Quote"
import type { SignupInput } from "@laksh21/zodschemas";
import { useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const Signup = () => {

    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            {/* Left Side: Quote */}
            <div className="hidden lg:block"> 
                {/*show as block element on large screens and above*/}
            <Quote />
            </div>

            {/* Right Side: Signup Form */}
            <div className="flex items-center justify-center bg-white">
                <div className="w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6">
                    <div className="text-3xl font-bold text-center">
                        Create an Account
                    </div>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link className="underline text-blue-600" to={"/signin"}>
                            Login
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <Input
                            label={"Name"}
                            type=""
                            placeholder={"Enter your Name"}
                            onChange={(e) => {
                                setpostInputs(c => ({
                                    ...c,
                                    name: e.target.value
                                }))
                            }}
                        />
                        <Input
                            label={"Email"}
                            type=""
                            placeholder={"m@example.com"}
                            onChange={(e) => {
                                setpostInputs(c => ({
                                    ...c,
                                    email: e.target.value
                                }))
                            }}
                        />
                        <Input
                            label={"Password"}
                            type="password"
                            placeholder={"Enter your Password"}
                            onChange={(e) => {
                                setpostInputs(c => ({
                                    ...c,
                                    password: e.target.value
                                }))
                            }}
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300" onClick={async () => {
                        try{
                          const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)  
                          const jwt = response.data.token
                          localStorage.setItem("token", jwt)
                          navigate("/blogs")
                        }
                        catch(e){
                            console.log("Some error occured and request failed: "+ e)
                        }
                    }}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};