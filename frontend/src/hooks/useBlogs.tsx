import axios from "axios"
import { useEffect, useState } from "react"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Blog {
    title: string,
    content: string,
    id: string,
    author: {
        name: string
    }
}
export const useBlogs = () => {
    const [loading, setloading] = useState(true)
    const [blogs, setblogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        })

        .then((response) => {
            setblogs(response.data);
            setloading(false);
        })
    },[])

    return {
        loading,
        blogs
    }
}