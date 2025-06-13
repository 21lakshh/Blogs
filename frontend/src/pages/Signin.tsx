import { Link, useNavigate } from "react-router-dom"
import { Input } from "../components/Input"
import { useState } from "react";
import type { SigninInput } from "@laksh21/zodschemas";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Signin = () => {
    const navigate = useNavigate()
    const [SigninInputs, setSigninInputs] = useState<SigninInput>({
        email: "",
        password: ""
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6">
                <div className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </div>

                <div className="text-center text-sm text-gray-600">
                    New here?{" "}
                    <Link className="underline text-blue-600" to={"/signup"}>
                        Create an Account
                    </Link>
                </div>

                <div className="space-y-4">
                    <Input
                        label={"Email"}
                        placeholder={"m@example.com"}
                        onChange={(e) => {
                            setSigninInputs((c) => ({
                                ...c,
                                email: e.target.value
                            }))
                        }}
                        type=""
                    />
                    <Input
                        label={"Password"}
                        placeholder={"Enter your Password"}
                        onChange={(e) => {
                            setSigninInputs((c) => ({
                                ...c,
                                password: e.target.value
                            }))
                        }}
                        type="password"
                    />
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300" onClick={async () => {
                    try{
                    const result = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, SigninInputs)
                    const jwt = result.data.token
                    localStorage.setItem("Token", jwt)  
                    navigate("/blogs")
                    }
                    catch(e){
                        console.log("Signin failed "+e)
                    }
                }}>
                    Sign in
                </button>
            </div>
        </div>
    );
};