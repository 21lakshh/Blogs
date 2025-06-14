import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { useParams } from "react-router-dom"
interface Blog {
    title: string,
    content: string,
    author: {
        name: string
    }
}
export const useBlog = () => {
    const [loading, setloading] = useState(true)
    const [blog, setblog] = useState<Blog>({
        title: "",
        content: "",
        author: {
            name: ""
        }
    })
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('Token')}`
            }
        })

        .then((response) => {
            setblog(response.data);
            setloading(false);
        })
    },[])

    return {
        loading,
        blog
    }
}