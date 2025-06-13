import { Link } from "react-router-dom"
import { Input } from "../components/Input"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return (
        <div className="grid grid-cols-2 min-h-screen">
            {/* Left Side: Quote */}
            <div>
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
                            placeholder={"Enter your Name"}
                            onChange={() => {}}
                        />
                        <Input
                            label={"Email"}
                            placeholder={"m@example.com"}
                            onChange={() => {}}
                        />
                        <Input
                            label={"Password"}
                            placeholder={"Enter your Password"}
                            onChange={() => {}}
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};