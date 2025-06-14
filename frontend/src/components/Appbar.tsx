import { Avatar } from "./Avatar"

export const Appbar = () => {
    return <div 
    className="border-b flex justify-between px-10 p-2">
        <div>Medium</div>
        <div><Avatar name="Lakshya"></Avatar></div>
    </div>
}