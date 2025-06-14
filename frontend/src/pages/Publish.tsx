import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate()

    const handlePublish = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/add`,
            {
                title,
                content,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`
                }
            }
        )
        navigate(`/blog/${response.data.blog.id}`)
        console.log("Blog ID: "+response.data.blog.id);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg space-y-6">
                <h1 className="text-3xl font-bold text-center">Publish New Blog</h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter blog title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Content</label>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 h-60 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your blog content here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handlePublish}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                    >
                        Publish Blog
                    </button>
                </div>
            </div>
        </div>
    );
};
