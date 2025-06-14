import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return (
        <div className="border-b flex items-center justify-between px-10 py-3 bg-white">
            <Link to={"/"}>
            <div className="text-xl font-semibold">Medium</div>
            </Link>
            <div className="flex items-center gap-4">
                <Link to={"/publish"}>
                <button 
                    type="button" 
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Publish
                </button>
            </Link>
                <Avatar name="Lakshya" />
            </div>
        </div>
    )
}
